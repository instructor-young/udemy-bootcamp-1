import prismaClient from "../../../../prisma/client.prisma";

async function toggleLikesOnPost(userId: string, postId: number) {
  const isLiked = await prismaClient.likedPost.findUnique({
    where: { userId_postId: { userId, postId } },
  });

  if (isLiked) {
    await prismaClient.likedPost.delete({
      where: { userId_postId: { userId, postId } },
    });

    return false;
  } else {
    await prismaClient.likedPost.create({
      data: { userId, postId },
    });

    return true;
  }
}

async function getLikedPosts(userId: string) {
  const user = await prismaClient.user.findUnique({
    where: { id: userId },
    select: { likedPosts: { select: { post: true } } },
  });
  if (!user) throw new Error("No User");

  const likedPosts = user.likedPosts.map((likedPost) => likedPost.post);

  return likedPosts;
}

const likesService = {
  toggleLikesOnPost,
  getLikedPosts,
};

export default likesService;
