import React, { useEffect, useState } from "react";

const getPostsEndpoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(getPostsEndpoint, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>게시글 목록</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <button onClick={() => setCount(count + 1)}>눌러눌러~</button>
    </div>
  );
}

export default Posts;
