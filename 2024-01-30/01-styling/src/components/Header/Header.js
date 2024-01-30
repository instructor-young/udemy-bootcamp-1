import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">산뜻한 화요일</a>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/menu-1">메뉴 1</a>
          </li>
          <li>
            <a href="/menu-1">메뉴 2</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
