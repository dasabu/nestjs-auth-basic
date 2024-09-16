import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalGuard } from './guards/local.guard';
import { GetUser } from './decorators/get-user.decorator';
import { User } from '@prisma/client';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    return await this.authService.signup(dto.username, dto.email, dto.password);
  }

  @UseGuards(LocalGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@GetUser() user) {
    return await this.authService.login(user.id, user.email);
  }

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user) {
    return user;
  }
}
