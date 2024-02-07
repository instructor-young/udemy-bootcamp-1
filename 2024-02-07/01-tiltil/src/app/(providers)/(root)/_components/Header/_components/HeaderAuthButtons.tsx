import Link from "next/link";

function HeaderAuthButtons() {
  return (
    <div className="flex gap-x-4 items-center">
      <Link href="/sign-up" prefetch>
        회원가입하기
      </Link>
      <Link href="/log-in">로그인하기</Link>
    </div>
  );
}

export default HeaderAuthButtons;
