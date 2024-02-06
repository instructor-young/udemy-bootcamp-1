import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import LikeButton from "../../components/LikeButton";
import Page from "../../components/Page";
import { useAuth } from "../../contexts/auth.context";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesDetailPage.module.scss";

function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  if (movie === null) return null;

  return (
    <Page>
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
          {isLoggedIn && <LikeButton movie={movie} />}
        </div>
      </section>

      <section>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      </section>
    </Page>
  );
}

export default MoviesDetailPage;
