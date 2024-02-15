import { RequestHandler } from "express";
import TodoModel from "../models/todo.model";

const getTodos: RequestHandler = async (req, res) => {
  const todos = await TodoModel.findMany();

  res.json(todos);
};

const getTodo: RequestHandler = async (req, res) => {
  const todoId = Number(req.params.todoId);
  const todo = await TodoModel.findUnique(todoId);

  res.json(todo);
};

const todosView = {
  getTodos,
  getTodo,
};

export default todosView;
