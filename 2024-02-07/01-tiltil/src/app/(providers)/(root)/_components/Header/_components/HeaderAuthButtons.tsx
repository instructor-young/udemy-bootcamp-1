"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import Link from "next/link";

function HeaderAuthButtons() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleClickLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex gap-x-4 items-center ml-auto text-sm">
      {isLoggedIn ? (
        <>
          <button onClick={handleClickLogOut}>로그아웃</button>
        </>
      ) : (
        <>
          <Link href="/sign-up">회원가입</Link>
          <Link href="/log-in">로그인</Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
