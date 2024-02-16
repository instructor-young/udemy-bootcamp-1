import { Router } from "express";
import usersController from "./users/users.controller";

const controllers = Router();

controllers.use("/users", usersController);

export default controllers;
