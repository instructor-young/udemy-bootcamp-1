import axios from "axios";
import { MovieInDetail, MovieInList } from "./movies.response";

const TMDB_ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

type TMDBMovieListData = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: MovieInList[];
  total_pages: number;
  total_results: number;
};

const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

const getMovies = async (type: "nowPlaying" | "topRated") => {
  const endpoints = {
    nowPlaying: "/now_playing?language=ko-KR&region=KR&page=1",
    topRated: "/top_rated?language=ko-KR&region=KR&page=1",
  };
  const response = await tmdbClient.get<TMDBMovieListData>(endpoints[type]);
  const data = response.data.results;

  return data;
};

const getMovie = async (movieId: number) => {
  const endpoint = `/${movieId}?language=ko-KR`;
  const response = await tmdbClient.get<MovieInDetail>(endpoint);
  const data = response.data;

  return data;
};

const moviesAPI = {
  getMovies,
  getMovie,
};

export default moviesAPI;
