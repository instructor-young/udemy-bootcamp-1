declare namespace Express {
  interface Request {
    user?: { id: string; encryptedPassword: string };
  }
}
