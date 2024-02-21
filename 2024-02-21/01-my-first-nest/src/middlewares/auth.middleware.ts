import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { verify } from 'jsonwebtoken';
import { ParsedQs } from 'qs';
import { PrismaService } from 'src/db/prisma/prisma.service';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
if (!JWT_SECRET_KEY) throw new Error('NO JWT_SECRET_KEY');

@Injectable()
export class AuthMiddleware implements NestMiddleware<Request, Response> {
  constructor(private readonly prismaService: PrismaService) {}

  async use(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: (error?: any) => void,
  ) {
    req.user = null;

    const accessToken = req.headers.authorization?.split('Bearer ')[1];
    if (!accessToken) return next();

    let id: number;

    try {
      const { sub } = verify(accessToken, process.env.JWT_SECRET_KEY);
      id = Number(sub);
    } catch (e) {
      throw new UnauthorizedException('Invalid accessToken');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) throw new BadRequestException('Delete user');
    req.user = user;

    next();
  }
}
