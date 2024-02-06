import Link from "next/link";

function PostsPage() {
  return (
    <div>
      <h1>이곳은 포스트 목록 페이지입니다.</h1>

      <div>
        <Link href="/posts/1">포스트1</Link>
        <Link href="/posts/2">포스트2</Link>
        <Link href="/posts/3">포스트3</Link>
      </div>
    </div>
  );
}

export default PostsPage;
