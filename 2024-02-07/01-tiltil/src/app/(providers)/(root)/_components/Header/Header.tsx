import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b flex items-center px-5">
      <Link href="/">
        <strong className="text-2xl">띨띨;;;</strong>
      </Link>

      <nav className="ml-20">
        <ul className="flex text-sm font-medium items-center gap-x-5">
          <li>
            <Link href="/tils?type=trending">트렌딩</Link>
          </li>
          <li>
            <Link href="/tils?type=latest">최신</Link>
          </li>
          <li>
            <Link href="/tils/write">TIL 쓰러가기</Link>
          </li>
          <li>
            <Link href="/my-profile">내 프로필</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
