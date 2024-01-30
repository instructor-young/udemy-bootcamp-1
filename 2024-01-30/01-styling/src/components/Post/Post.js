import React from "react";
import styles from "./Post.module.scss";

function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <h2>이건 포스트의 제목</h2>
      </header>

      <section>
        <p>포스트 내용1</p>
        <p>포스트 내용2</p>
        <p>포스트 내용3</p>
        <p>포스트 내용4</p>
        <p>포스트 내용5</p>
      </section>

      <footer>여긴 댓글 영역</footer>
    </article>
  );
}

export default Post;
