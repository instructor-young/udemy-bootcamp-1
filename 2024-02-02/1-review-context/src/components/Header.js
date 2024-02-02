import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Header() {
  const authContext = useContext(AuthContext);
  const { isLoggedIn, toggleLogIn } = authContext;
  console.log("리렌더 Header");
  return (
    <header className="h-14 border">
      <button onClick={toggleLogIn}>로그인 토글</button>
      <div>로그인 여부: 로그인 {!isLoggedIn && "안 "}됨</div>
    </header>
  );
}

export default Header;
