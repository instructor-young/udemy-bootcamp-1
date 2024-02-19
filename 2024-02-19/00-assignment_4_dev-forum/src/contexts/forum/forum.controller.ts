import { Router } from "express";
import boardsController from "./boards/boards.controller";
import postsController from "./posts/posts.controller";

const forumControllers = Router();

forumControllers.use("/boards", boardsController);
forumControllers.use("/posts", postsController);

export default forumControllers;
