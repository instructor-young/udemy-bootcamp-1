import { ComponentProps } from "react";
import Post from "./Post";

interface PostsProps {
  posts: Array<ComponentProps<typeof Post>["post"]>;
}

function Posts({ posts }: PostsProps) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </div>
  );
}

export default Posts;
