import { Router } from "express";
import todosController from "./todos.controller";

const controllers = Router();

controllers.use("/todos", todosController);
controllers.use("/posts", () => {});
controllers.use("/users", () => {});
controllers.use("/auth", () => {});
controllers.use("/products", () => {});

export default controllers;
