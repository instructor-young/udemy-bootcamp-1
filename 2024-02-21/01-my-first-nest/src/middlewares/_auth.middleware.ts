// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { NextFunction, Request, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { Exception } from 'src/app.exception';
// import { PrismaService } from 'src/db/prisma/prisma.service';
// import {
//   AccountType,
//   JwtPayload,
//   TokenType,
// } from 'src/domains/accounts/accounts.type';

// const adminAccessTokenSecret = process.env.ADMIN_ACCESS_TOKEN_SECRET;
// const userAccessTokenSecret = process.env.USER_ACCESS_TOKEN_SECRET;

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(private readonly prismaService: PrismaService) {}

//   private readonly noAuthRoutes: string[] = [
//     'accounts/users/sign-in/google',
//     'accounts/users/token',
//     'accounts/users/log-out',
//   ];

//   async use(req: Request, _: Response, next: NextFunction) {
//     if (req.baseUrl === '/graphql' && req.method === 'GET') return next();
//     if (this.noAuthRoutes.some((route) => req.baseUrl.includes(route)))
//       return next();

//     const accessToken = req.cookies?.accessToken;
//     if (!accessToken) return next();

//     const { sub, accountType, tokenType } = jwt.decode(
//       accessToken,
//     ) as JwtPayload;

//     this.barrier_tokenTypeMustBeAccessToken(tokenType);
//     this.barrier_accountTypeMustBeEitherUserOrAdmin(accountType);
//     this.barrier_accessTokenMustBeValid(accessToken, accountType);

//     if (accountType === 'admin') {
//       await this.barrier_accountMustExist('admin', sub);
//       req.adminId = sub;
//     } else {
//       await this.barrier_accountMustExist('user', sub);
//       req.userId = sub;
//     }

//     next();
//   }

//   barrier_tokenTypeMustBeAccessToken(tokenType: string) {
//     if (tokenType === TokenType.accessToken) return;

//     throw new Exception('InvalidToken', { message: '잘못된 토큰 유형입니다' });
//   }

//   barrier_accountTypeMustBeEitherUserOrAdmin(accountType: string) {
//     if (accountType === AccountType.user) return;
//     if (accountType === AccountType.admin) return;

//     throw new Exception('InvalidToken', { message: '잘못된 계정 유형입니다' });
//   }

//   barrier_accessTokenMustBeValid(
//     accessToken: string,
//     accountType: AccountType,
//   ) {
//     if (!adminAccessTokenSecret)
//       throw new Exception('EnvironmentVariablesMissing');
//     if (!userAccessTokenSecret)
//       throw new Exception('EnvironmentVariablesMissing');

//     const secret =
//       accountType === 'admin' ? adminAccessTokenSecret : userAccessTokenSecret;

//     try {
//       jwt.verify(accessToken, secret);
//     } catch (error: unknown) {
//       if (!(error instanceof jwt.JsonWebTokenError)) {
//         throw new Exception('InternalServerError');
//       }

//       if (error.name === 'TokenExpiredError') {
//         throw new Exception('AccessTokenExpired');
//       }

//       throw new Exception('InvalidToken', {
//         message: '잘못된 accessToken입니다.',
//         cause: error,
//       });
//     }
//   }

//   async barrier_accountMustExist(accountType: AccountType, accountId: string) {
//     const account =
//       accountType === 'user'
//         ? await this.prismaService.user.findUnique({
//             where: { id: accountId },
//             select: { id: true },
//           })
//         : await this.prismaService.admin.findUnique({
//             where: { id: accountId },
//             select: { id: true },
//           });
//     if (account) return;

//     throw new Exception('InvalidToken', {
//       message: '존재하지 않는 계정입니다',
//     });
//   }
// }
