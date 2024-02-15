import { Router } from "express";
import todosView from "../views/todos.view";

const todosController = Router();

todosController.get("/todos", todosView.getTodos);

export default todosController;
