import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, compare } from 'bcryptjs';

import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(username: string, email: string, _password: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) throw new ForbiddenException('Credentials taken');

    const hashedPassword = await hash(_password, 10);
    const user: User = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    return await this.signAccessToken(user.id, user.email);
  }

  async login(userId: number, email: string) {
    return await this.signAccessToken(userId, email);
  }

  async validateUser(email: string, password: string) {
    const user: User = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    delete user.password;
    return user;
  }

  private async signAccessToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const options = {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: this.configService.get<string>('ACCESS_TOKEN_EXPIRE'),
    };
    return {
      access_token: await this.jwtService.signAsync(payload, options),
    };
  }
}
