import { BoardName } from "@prisma/client";
import prismaClient from "../../../prisma/client.prisma";
import postsService from "../posts/posts.service";

const getBoards = async () => {
  const boards = await prismaClient.board.findMany();

  return boards;
};

const getBoard = async (boardName: BoardName) => {
  const board = await prismaClient.board.findUnique({
    where: { name: boardName },
    include: { posts: true },
  });

  return board;
};

const createPostOnBoard = async (createPostData: {
  boardName: BoardName;
  authorId: string;
  title: string;
  content: string;
}) => {
  const post = await postsService.createPost(createPostData);

  return post;
};

const boardsService = {
  getBoards,
  getBoard,
  createPostOnBoard,
};

export default boardsService;
