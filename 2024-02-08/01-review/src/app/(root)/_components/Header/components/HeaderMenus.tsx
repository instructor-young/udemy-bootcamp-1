"use client";

import LogInModal from "@/components/LogInModal";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";

function HeaderMenus() {
  const dispatch = useAppDispatch();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  return (
    <div className="ml-auto">
      <button
        className="bg-black text-sm text-white px-5 py-2 rounded font-semibold hover:bg-black/70 transition"
        onClick={handleClickLogIn}
      >
        로그인하기
      </button>
    </div>
  );
}

export default HeaderMenus;
