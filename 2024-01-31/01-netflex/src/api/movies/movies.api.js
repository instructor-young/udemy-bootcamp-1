const TMDB_ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
};

const getMovies = async (type) => {
  const endpoints = {
    nowPlaying:
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&region=KR&page=1",
    topRated:
      "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&region=KR&page=1",
  };
  const response = await fetch(endpoints[type], options);
  const data = await response.json();
  const movies = data.results;

  return movies;
};

const getMovie = async (movieId) => {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`;
  const response = await fetch(endpoint, options);
  const data = await response.json();

  return data;
};

const moviesAPI = {
  getMovies,
  getMovie,
};

export default moviesAPI;
