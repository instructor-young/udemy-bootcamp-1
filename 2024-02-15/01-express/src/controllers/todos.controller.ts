import { Router } from "express";
import todosView from "../views/todos.view";

const todosController = Router();

todosController.get("/", todosView.getTodos);
todosController.get("/:todoId", todosView.getTodo);

export default todosController;
