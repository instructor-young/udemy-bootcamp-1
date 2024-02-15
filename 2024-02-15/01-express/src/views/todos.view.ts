import { RequestHandler } from "express";
import TodoModel from "../models/todo.model";

const getTodos: RequestHandler = async (req, res) => {
  const todos = await TodoModel.findMany();

  res.json(todos);
};

const todosView = {
  getTodos,
};

export default todosView;
