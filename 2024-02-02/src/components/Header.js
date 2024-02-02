import React, { useContext } from "react";
import { AuthContext } from "../App";

function Header() {
  const authContext = useContext(AuthContext);
  const { isLoggedIn, logIn } = authContext;

  return (
    <header className="h-14 bg-black text-white">
      <button onClick={logIn}>로그인하기</button>
      <div>로그인 여부: 로그인 {!isLoggedIn && "안 "}됨</div>
    </header>
  );
}

export default Header;
