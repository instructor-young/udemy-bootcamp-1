import { Router } from "express";
import likesController from "./likes/likes.controller";

const postsController = Router();

// GetPost
postsController.get("/:postId", (req, res, next) => {
  res.json("Post~!");
});

postsController.use("/:postId/likes", likesController);

export default postsController;
