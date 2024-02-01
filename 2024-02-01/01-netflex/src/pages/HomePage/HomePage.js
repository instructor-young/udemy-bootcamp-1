import React, { useEffect, useState } from "react";
import api from "../../api/api";
import MoviesList from "../../components/MoviesList";
import Page from "../../components/Page";

function HomePage() {
  const [movies, setMovies] = useState({ nowPlaying: [], topRated: [] });

  useEffect(() => {
    Promise.all([
      api.movies.getMovies("nowPlaying"),
      api.movies.getMovies("topRated"),
    ]).then(([nowPlaying, topRated]) => setMovies({ nowPlaying, topRated }));
  }, []);

  return (
    <Page fullWidth>
      <MoviesList listTitle="현재 상영작" movies={movies.nowPlaying} />
      <MoviesList listTitle="평점이 높은 영화" movies={movies.topRated} />
    </Page>
  );
}

export default HomePage;
