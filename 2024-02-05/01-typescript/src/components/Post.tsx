type Post = { title: string; content: string };

interface PostProps {
  post: Post;
}

function Post({ post }: PostProps) {
  return (
    <div>
      <h6>{post.title}</h6>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
