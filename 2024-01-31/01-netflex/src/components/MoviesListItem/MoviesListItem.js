import React from "react";
import { Link } from "react-router-dom";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesListItem.module.scss";

function MoviesListItem({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
      <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      <h6>{movie.title}</h6>
    </Link>
  );
}

export default MoviesListItem;
