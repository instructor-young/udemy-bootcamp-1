import { Router } from "express";
import postsService from "./posts.service";

const postsController = Router();

postsController.post("/", postsService.createPost);
postsController.get("/", postsService.getPosts);
postsController.get("/:postId", postsService.getPost);
postsController.put("/:postId", postsService.updatePost);
postsController.delete("/:postId", postsService.deletePost);

export default postsController;
