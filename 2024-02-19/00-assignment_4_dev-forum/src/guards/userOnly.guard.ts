import { NextFunction, Request, Response } from "express";

export default function userOnly(
  req: Request,
  _: Response,
  next: NextFunction
) {
  const user = req.user;
  if (!user) throw new Error("Unauthorized");

  next();
}
