import Link from "next/link";

function HeaderAuthButtons() {
  return (
    <div className="flex gap-x-4 items-center ml-auto text-sm">
      <Link href="/sign-up">회원가입</Link>
      <Link href="/log-in">로그인</Link>
    </div>
  );
}

export default HeaderAuthButtons;
