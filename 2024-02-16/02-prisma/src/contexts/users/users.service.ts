import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import prismaClient from "../../prisma/client.prisma";

class UsersService {
  async createUser(
    req: Request<
      never,
      unknown,
      {
        email: string;
        password: string;
        nickname: string;
        name: string;
        gender: string;
        age: number;
      }
    >,
    res: Response<Omit<User, "encryptedPassword">>,
    next: NextFunction
  ) {
    try {
      const { email, password, nickname, name, gender, age } = req.body;
      if (!email.trim()) throw new Error("No email");
      if (!password.trim()) throw new Error("No password");

      const encryptedPassword = await hash(password, 12);
      const user = await prismaClient.user.create({
        data: {
          email,
          encryptedPassword,
          profile: { create: { nickname, name, gender, age } },
        },
        select: { id: true, email: true, createdAt: true, profile: true },
      });

      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(_: Request, res: Response) {
    const users = await prismaClient.user.findMany();
    res.json(users);
  }

  async getUser(req: Request<{ userId: string }>, res: Response) {
    const parsedUserId = Number(req.params.userId);
    if (isNaN(parsedUserId)) throw new Error("UserId is not a number");

    const user = await prismaClient.user.findUnique({
      where: { id: parsedUserId },
      select: {
        id: true,
        email: true,
        createdAt: true,
        profile: true,
      },
    });

    res.json(user);
  }

  async updateUser(
    req: Request<
      { userId: string },
      Omit<User, "encryptedPassword">,
      { email: string }
    >,
    res: Response<Omit<User, "encryptedPassword">>
  ) {
    const parsedUserId = Number(req.params.userId);
    if (isNaN(parsedUserId)) throw new Error("UserId is not a number");

    const { email } = req.body;

    const user = await prismaClient.user.update({
      where: { id: parsedUserId },
      data: { email },
      select: { id: true, email: true, createdAt: true },
    });
    if (!user) throw new Error("User Not Found");

    res.json(user);
  }

  async deleteUser(
    req: Request<{ userId: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const parsedUserId = Number(req.params.userId);
      if (isNaN(parsedUserId)) throw new Error("UserId is not a number");

      await prismaClient.user.delete({ where: { id: parsedUserId } });

      res.json(parsedUserId);
    } catch (e) {
      next(e);
    }
  }
}

const usersService = new UsersService();

export default usersService;
