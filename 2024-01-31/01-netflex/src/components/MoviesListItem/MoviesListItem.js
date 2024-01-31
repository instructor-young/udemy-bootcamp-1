import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesListItem.module.scss";

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();

  return (
    <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
      <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      <h6>{movie.title}</h6>

      {isLoggedIn && <button>좋아요</button>}
    </Link>
  );
}

export default MoviesListItem;
