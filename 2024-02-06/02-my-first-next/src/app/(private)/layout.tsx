import Link from "next/link";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-500">
      <header>
        <Link href="/">홈</Link>
        <Link href="/posts">포스트목록</Link>
        <Link href="/my-page">마이페이지</Link>
      </header>
      {children}
    </div>
  );
}

export default PrivateLayout;
