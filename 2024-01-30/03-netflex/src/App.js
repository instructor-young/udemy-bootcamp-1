import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";

const TMDB_ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
const nowPlayingEndpoint =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&region=KR&page=1";
const topRatedEndpoint =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

const getMovies = async (endpoint) => {
  const response = await fetch(endpoint, options);
  const data = await response.json();
  const movies = data.results;

  return movies;
};
function App() {
  const [movies, setMovies] = useState({ nowPlaying: [], topRated: [] });

  useEffect(() => {
    Promise.all([
      getMovies(nowPlayingEndpoint),
      getMovies(topRatedEndpoint),
    ]).then(([nowPlaying, topRated]) => setMovies({ nowPlaying, topRated }));
  }, []);

  return (
    <div className={styles.app}>
      <Header />

      <main>
        <MoviesList listTitle="현재 상영작" movies={movies.nowPlaying} />
        <MoviesList listTitle="평점이 높은 영화" movies={movies.topRated} />
      </main>
    </div>
  );
}

export default App;
