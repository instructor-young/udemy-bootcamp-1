import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesDetailPage.module.scss";

function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  if (movie === null) return null;

  return (
    <div className={styles.wrapper}>
      <section className={styles.mainInfo}>
        <img
          className={styles.posterImg}
          src={getTMDBImgSrc(movie.poster_path)}
          alt={movie.title}
        />

        <div className={styles.mainInfoRight}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>

          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <strong>{movie.vote_average}</strong>
        </div>
      </section>

      <section>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      </section>
    </div>
  );
}

export default MoviesDetailPage;
