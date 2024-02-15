import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../config";

export const users: Array<{ id: string; encryptedPassword: string }> = [];

class AuthService {
  async signUp(req: Request, res: Response) {
    const { id, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 12);

    users.push({ id, encryptedPassword });

    res.json(encryptedPassword);
  }

  async logIn(req: Request, res: Response) {
    const { id, password } = req.body;
    const user = users.find((user) => user.id === id);
    if (!user) return res.sendStatus(404);

    const isVerified = await bcrypt.compare(password, user.encryptedPassword);
    if (!isVerified) return res.sendStatus(400);

    const accessToken = jwt.sign({ id }, JWT_SECRET_KEY, { subject: id });

    res.json(accessToken);
  }
}

const authService = new AuthService();

export default authService;
