import { NextFunction, Request, Response } from "express";

const freePassRoutes = ["/auth/sign-up", "/auth/log-in"];

export default function authenticator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (freePassRoutes.includes(req.url)) return next();

  const accessToken = req.headers.authorization?.split("Bearer ")[1];
  if (!accessToken) return res.sendStatus(401);

  next();
}
