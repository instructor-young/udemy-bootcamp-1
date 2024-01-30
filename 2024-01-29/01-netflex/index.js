const nowPlayingEndpoint =
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&region=KR";
const topRatedEndpoint =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&region=KR";
const imageOrigin = "https://image.tmdb.org/t/p/w500";

async function getMovies(endpoint) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 키는 비밀~!",
    },
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();
  const movies = data.results;

  return movies;
}

function renderMovies(movies, parentNodeId) {
  const moviesListEl = document.getElementById(parentNodeId);

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");

    movieEl.className = "movies-list-item";
    movieEl.innerHTML = `
      <img
        class="movies-list-item-img"
        src="${imageOrigin}${movie.backdrop_path}"
        alt="${movie.title}" />
      <h6 class="movies-list-item-title">${movie.title}</h6>
    `;

    moviesListEl.appendChild(movieEl);
  });
}

async function main() {
  const getNowPlayingMoviesPromise = getMovies(nowPlayingEndpoint);
  const getTopRatedMoviesPromise = getMovies(topRatedEndpoint);

  const [nowPlayingMovies, topRatedMovies] = await Promise.all([
    getNowPlayingMoviesPromise,
    getTopRatedMoviesPromise,
  ]);

  renderMovies(nowPlayingMovies, "now-playing-movies-list");
  renderMovies(topRatedMovies, "top-rated-movies-list");
}

main();
