import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b flex items-center">
      <Link href="/">띨띨</Link>

      <nav>
        <ul className="flex">
          <li>
            <Link href="/til/trending">트렌딩</Link>
          </li>
          <li>
            <Link href="/til/latest">최신</Link>
          </li>
          <li>
            <Link href="/til/write">TIL 쓰러가기</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
