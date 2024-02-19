import { Router } from "express";
import userOnly from "../../../../guards/userOnly.guard";
import likesService from "./likes.service";

const likesController = Router();

likesController.post("/", userOnly, async (req, res, next) => {
  const postId = Number(req.params.postId);
  const userId = req.user!.id;

  const isLiked = await likesService.toggleLikesOnPost(userId, postId);

  res.send(isLiked);
});

export default likesController;
