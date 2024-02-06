import Link from "next/link";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-500">
      <header>
        <Link href="/">홈</Link>
        <Link href="/about">어바웃</Link>
      </header>
      {children}
    </div>
  );
}

export default PublicLayout;
