import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class LoggedInOnlyGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const loggedInOnly = this.reflector.get<boolean>(
      'LoggedInOnly',
      context.getHandler(),
    );
    if (!loggedInOnly) return true;

    const request = context.switchToHttp().getRequest<Request>();
    if (!request.user) throw new ForbiddenException();

    return true;
  }
}
