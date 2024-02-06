"use client";

import { useEffect } from "react";

function PostsLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    alert("당신은 포스트 페이지에 들어왔습니다.");
  }, []);

  return (
    <div>
      <h1>여기서부터는 포스트의 레이아웃입니다</h1>
      {children}
    </div>
  );
}

export default PostsLayout;
