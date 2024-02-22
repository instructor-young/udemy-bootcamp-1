import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Partner, Prisma } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { PrismaService } from 'src/db/prisma/prisma.service';
import generateRandomId from 'src/utils/generateRandomId';
import { PartnersLogInDto, PartnersSignUpDto } from './partners.dto';

@Injectable()
export class PartnersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async signUp(dto: PartnersSignUpDto) {
    const { email, password, businessName, staffName, phoneNumber } = dto;
    const data: Prisma.PartnerCreateInput = {
      id: generateRandomId(),
      email,
      encryptedPassword: await hash(password, 12),
      businessName,
      staffName,
      phoneNumber,
    };
    const partner = await this.prismaService.partner.create({
      data,
      select: { id: true, email: true },
    });
    const accessToken = this.generateAccessToken(partner);

    return accessToken;
  }

  async logIn(dto: PartnersLogInDto) {
    const { email, password } = dto;

    const partner = await this.prismaService.partner.findUnique({
      where: { email },
      select: { id: true, email: true, encryptedPassword: true },
    });
    if (!partner) throw new NotFoundException('No partner found');

    const isCorrectPassword = compare(password, partner.encryptedPassword);
    if (!isCorrectPassword) throw new BadRequestException('Incorrect password');

    const accessToken = this.generateAccessToken(partner);

    return accessToken;
  }

  generateAccessToken(partner: Pick<Partner, 'id' | 'email'>) {
    const { id: subject, email } = partner;
    const secretKey = this.configService.getOrThrow<string>('JWT_SECRET_KEY');
    const accessToken = sign({ email, accountType: 'partner' }, secretKey, {
      subject,
      expiresIn: '5d',
    });

    return accessToken;
  }
}
