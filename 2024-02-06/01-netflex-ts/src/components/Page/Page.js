import React from "react";
import styles from "./Page.module.scss";

function Page({ fullWidth, children }) {
  const style = fullWidth
    ? { maxWidth: "unset !important", padding: "0 important!" }
    : undefined;
  return (
    <main
      id="page"
      className={`${styles.page} ${fullWidth ? styles.fullWidth : ""}`}
      style={style}
    >
      {children}
    </main>
  );
}

export default Page;
