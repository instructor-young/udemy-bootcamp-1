import { Router } from "express";
import authService from "./auth.service";

const authController = Router();

/**
 * SignUp
 */
authController.post<
  "/sign-up",
  never,
  { accessToken: string },
  { email: string; password: string }
>("/sign-up", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const accessToken = await authService.signUp({ email, password });

    res.json({ accessToken });
  } catch (e) {
    next(e);
  }
});

/**
 * LogIn
 */
authController.post<
  "/log-in",
  never,
  { accessToken: string },
  { email: string; password: string }
>("/log-in", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const accessToken = await authService.logIn({ email, password });

    res.json({ accessToken });
  } catch (e) {
    next(e);
  }
});

export default authController;
