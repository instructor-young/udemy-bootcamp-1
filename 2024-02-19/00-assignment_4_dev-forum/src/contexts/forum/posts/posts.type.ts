import { BoardName } from "@prisma/client";

export type CreatePostData = {
  boardName: BoardName;
  authorId: string;
  title: string;
  content: string;
};
