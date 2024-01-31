import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import styles from "./Header.module.scss";

function Header() {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>

      <nav>
        <ul>
          {isLoggedIn ? (
            <li>
              <button onClick={logOut}>로그아웃</button>
            </li>
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
