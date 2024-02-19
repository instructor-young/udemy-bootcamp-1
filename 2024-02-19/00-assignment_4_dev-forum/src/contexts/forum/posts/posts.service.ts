import prismaClient from "../../../prisma/client.prisma";
import { CreatePostData } from "./posts.type";

const createPost = async (createPostData: CreatePostData) => {
  const { boardName, authorId, title, content } = createPostData;
  const post = await prismaClient.post.create({
    data: {
      title,
      content,
      author: { connect: { id: authorId } },
      board: { connect: { name: boardName } },
    },
  });

  return post;
};

const postsService = {
  createPost,
};

export default postsService;
