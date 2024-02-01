import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import styles from "./SignInPage.module.scss";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (username === "udemy" && password === "udemy") {
      signIn();
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>로그인 성공</div>
      ) : (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            placeholder="아이디를 입력해 주세요"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="비밀번호를 입력해 주세요"
          />

          <button className={styles.button} onClick={handleClickSignIn}>
            로그인하기
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInPage;
