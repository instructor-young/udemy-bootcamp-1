import { PropsWithChildren } from "react";
import styles from "./Page.module.scss";

interface PageProps {
  fullWidth?: boolean;
}

function Page({ fullWidth, children }: PropsWithChildren<PageProps>) {
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
