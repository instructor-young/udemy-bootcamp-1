import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>

      <nav>
        <ul>
          <Link to="/sign-in">로그인하기</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
