import { Body, Controller, Post } from '@nestjs/common';
import { UsersLogInDto, UsersSignUpDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('accounts/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  async signUp(@Body() dto: UsersSignUpDto) {
    const result = await this.usersService.signUp(dto);

    return result;
  }

  @Post('log-in')
  async logIn(@Body() dto: UsersLogInDto) {
    const result = await this.usersService.logIn(dto);

    return result;
  }
}
