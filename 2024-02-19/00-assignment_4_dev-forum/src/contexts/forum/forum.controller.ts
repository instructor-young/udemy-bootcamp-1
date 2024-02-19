import { Router } from "express";
import boardsController from "./boards/boards.controller";

const forumControllers = Router();

forumControllers.use("/boards", boardsController);

export default forumControllers;
