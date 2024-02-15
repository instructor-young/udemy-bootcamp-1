import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import { users } from "../contexts/auth/auth.service";

const freePassRoutes = ["/auth/sign-up", "/auth/log-in"];

export default function authenticator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // 여권 발급 받으러 왔니? 지나가
  if (freePassRoutes.includes(req.url)) return next();

  // 여권 가져왔니? 안 가져왔으면 돌아가
  const accessToken = req.headers.authorization?.split("Bearer ")[1];
  if (!accessToken) return res.sendStatus(401);

  // 여권 유효한 거 맞니?
  try {
    const { sub: id } = jwt.verify(accessToken, JWT_SECRET_KEY);
    const user = users.find((user) => user.id === id);
    if (!user) return res.sendStatus(404);

    req.user = user;
  } catch (e) {
    return res.sendStatus(401);
  }

  next();
}
