import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";
import styles from "./Header.module.scss";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickname } = useProfile();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>

      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              {nickname && <li>{nickname}님, 안녕하세요?</li>}
              <li>
                <Link to="/my-page">마이페이지</Link>
              </li>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
