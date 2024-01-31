import React from "react";
import styles from "./MoviesListItem.module.scss";

function MoviesListItem({ movie }) {
  return (
    <div className={styles.wrapper}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />

      <h6>{movie.title}</h6>
    </div>
  );
}

export default MoviesListItem;
