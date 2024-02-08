import Link from "next/link";
import HeaderNav from "./components/HeaderNav";

function Header() {
  return (
    <header className="px-5 h-14 flex items-center shadow drop-shadow sticky top-0 bg-white">
      <Link href="/" className="font-bold text-2xl">
        Udemy
      </Link>

      <HeaderNav />
    </header>
  );
}

export default Header;
