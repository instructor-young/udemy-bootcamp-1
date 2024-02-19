import { User } from "@prisma/client";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { JWT_SECRET_KEY } from "../../config/env.config";
import prismaClient from "../../prisma/client.prisma";
import { LogInData, SignUpData } from "./auth.type";

const signUp = async (signUpData: SignUpData) => {
  const id = nanoid();
  const { email, password } = signUpData;
  const encryptedPassword = await hash(password, 12);
  const user = await prismaClient.user.create({
    data: { id, email, encryptedPassword },
  });
  const accessToken = generateAccessToken(user);

  return accessToken;
};

const logIn = async (logInData: LogInData) => {
  const { email, password } = logInData;
  const user = await prismaClient.user.findUnique({
    where: { email },
  });
  if (!user) throw new Error("No User");

  const isCorrect = await compare(password, user.encryptedPassword);
  if (!isCorrect) throw new Error("Invalid Password");

  const accessToken = generateAccessToken(user);

  return accessToken;
};

const generateAccessToken = (user: User) => {
  const { email } = user;
  const accessToken = jwt.sign({ email }, JWT_SECRET_KEY, {
    subject: user.id,
    expiresIn: "2d",
  });

  return accessToken;
};

const authService = {
  signUp,
  logIn,
};

export default authService;
