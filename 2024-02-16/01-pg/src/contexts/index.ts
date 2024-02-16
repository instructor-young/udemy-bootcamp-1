import { Router } from "express";
import postsController from "./posts.context/posts.controller";

export const controllers = Router();

controllers.use("/posts", postsController);
