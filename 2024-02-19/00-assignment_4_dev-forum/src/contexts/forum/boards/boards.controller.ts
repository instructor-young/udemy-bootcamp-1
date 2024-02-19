import { BoardName } from "@prisma/client";
import { Router } from "express";
import userOnly from "../../../guards/userOnly.guard";
import { CreatePostData } from "../posts/posts.type";
import boardsService from "./boards.service";

const boardsController = Router();

boardsController.get("/", async (_, res, next) => {
  try {
    const boards = await boardsService.getBoards();

    res.json(boards);
  } catch (e) {
    next(e);
  }
});

boardsController.get("/:boardName", async (req, res, next) => {
  try {
    const boardName = req.params.boardName as BoardName;
    const board = await boardsService.getBoard(boardName);

    res.json(board);
  } catch (e) {
    next(e);
  }
});

boardsController.post("/:boardName/posts", userOnly, async (req, res, next) => {
  const boardName = req.params.boardName as BoardName;
  const { title, content } = req.body;
  const authorId = req.user!.id;
  const createPostData: CreatePostData = {
    title,
    content,
    authorId,
    boardName,
  };

  const post = await boardsService.createPostOnBoard(createPostData);

  res.json(post);
});

export default boardsController;
