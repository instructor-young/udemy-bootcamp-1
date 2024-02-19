import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
if (!JWT_SECRET_KEY) throw new Error("No JWT_SECRET_KEY");
