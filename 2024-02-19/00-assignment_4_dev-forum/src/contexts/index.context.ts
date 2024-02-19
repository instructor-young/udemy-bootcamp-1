import { Router } from "express";
import authController from "./auth/auth.controller";
import forumControllers from "./forum/forum.controller";

const controllers = Router();

controllers.use(forumControllers);
controllers.use("/auth", authController);

export default controllers;
