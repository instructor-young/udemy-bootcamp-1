"use client";

import LogInModal from "@/components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {
    logOut();
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {isLoggedIn ? (
        <button
          className="bg-black text-sm text-white px-5 py-2 rounded font-semibold hover:bg-black/70 transition"
          onClick={handleClickLogOut}
        >
          로그아웃
        </button>
      ) : (
        <>
          <Link
            href="/sign-up"
            className="bg-white text-sm text-black px-5 py-2 rounded font-semibold hover:bg-black/5 transition border border-black"
          >
            회원가입하기
          </Link>
          <button
            className="bg-black text-sm text-white px-5 py-2 rounded font-semibold hover:bg-black/70 transition"
            onClick={handleClickLogIn}
          >
            로그인하기
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
