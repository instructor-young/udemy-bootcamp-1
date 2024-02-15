import { Router } from "express";
import authController from "./auth/auth.controller";
import brandsController from "./brands/brands.controller";

const controllers = Router();

controllers.use("/auth", authController);
controllers.use("/brands", brandsController);

export default controllers;
