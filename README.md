<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# NestJS Authentication API

## Overview

This project is an authentication API built using NestJS, Prisma, and JWT. It provides functionality for user registration, login, and retrieving current user information based on a valid JWT token.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma**: A modern database toolkit to query, migrate and manage a database with TypeScript/JavaScript.
- **Passport**: Authentication middleware for Node.js.
- **JWT (JSON Web Token)**: Used for secure user authentication.
- **MySQL**: Database used for this project.
- **bcryptjs**: Used to hash and compare passwords.

## Setup

### 1. Clone the repository:

```bash
git clone https://github.com/hiimdaxd/nestjs-auth-basic.git
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Apply Prisma migrations:

```bash
npx prisma migrate deploy
```

### 4. Start the backend server:

```bash
npm run start:dev
```

## API Endpoints

### 1. User Registration

- Endpoint: `POST /auth/signup`
- Description: Registers a new user by providing username, email, and password.
- Sample Request:

```bash
POST /auth/signup
Content-Type: application/json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

- Sample Response:

```bash
  "access_token": "your-jwt-token"
```

### 2. User Login

- Endpoint: `POST /auth/login`
- Description: Logs in a user and returns an access token if credentials are valid.
- Sample Request:

```bash
POST /auth/login
Content-Type: application/json
{
  "email": "john@example.com",
  "password": "password123"
}
```

- Sample Response:

```bash
  "access_token": "your-jwt-token"
```

### 3. Get Current User Info

- Endpoint: `GET /auth/me`
- Description: Returns the currently logged-in user's details based on the JWT token..
- Sample Request:

```bash
GET /auth/me
Authorization: Bearer your-jwt-token
```

- Sample Response:

```bash
{
  "userId": 1,
  "email": "john@example.com"
}
```
