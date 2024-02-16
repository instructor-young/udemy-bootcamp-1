import { Router } from "express";
import usersService from "./users.service";

const usersController = Router();

usersController.post("/", usersService.createUser);
usersController.get("/", usersService.getUsers);
usersController.get("/:userId", usersService.getUser);
usersController.put("/:userId", usersService.updateUser);
usersController.delete("/:userId", usersService.deleteUser);

export default usersController;
