import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { isEmail } from 'validator';
import { UsersLogInDto, UsersSignUpDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp(dto: UsersSignUpDto) {
    const { email, password } = dto;

    if (!email.trim()) throw new Error('No email');
    if (!isEmail(email)) throw new Error('Invalid email');
    if (!password.trim()) throw new Error('No password');
    if (password.length < 4) throw new Error('Too short password');

    const encryptedPassword = await hash(password, 12);
    const user = await this.prismaService.user.create({
      data: {
        email,
        encryptedPassword,
        profile: { create: {} },
        cart: { create: {} },
      },
    });
    const accessToken = this.generateAccessToken(user);

    return { accessToken };
  }

  async logIn(dto: UsersLogInDto) {
    const { email, password } = dto;

    if (!email.trim()) throw new Error('No email');
    if (!isEmail(email)) throw new Error('Invalid email');
    if (!password.trim()) throw new Error('No password');
    if (password.length < 4) throw new Error('Too short password');

    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new Error('No user');

    try {
      await compare(password, user.encryptedPassword);
    } catch (e) {
      throw new Error('Invalid password');
    }

    const accessToken = this.generateAccessToken(user);

    return { accessToken };
  }

  generateAccessToken(user: Pick<User, 'id' | 'email'>) {
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    const accessToken = sign({ email: user.email }, JWT_SECRET_KEY, {
      subject: String(user.id),
      expiresIn: '5m',
    });

    return accessToken;
  }
}
