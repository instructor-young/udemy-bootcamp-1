import { Router } from "express";
import authService from "./auth.service";

const authController = Router();

authController.post("/sign-up", authService.signUp);
authController.post("/log-in", authService.logIn);

export default authController;
