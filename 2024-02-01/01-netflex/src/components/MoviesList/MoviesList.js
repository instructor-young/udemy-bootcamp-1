import React from "react";
import MoviesListItem from "../MoviesListItem";
import styles from "./MoviesList.module.scss";

function MoviesList({ listTitle, movies }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.listTitle}>{listTitle}</h2>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MoviesListItem movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
