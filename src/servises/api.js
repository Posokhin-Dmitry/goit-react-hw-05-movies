import axios from 'axios';

const BASEURL = 'https://api.themoviedb.org/3/';
const key = 'a1c9899f2422fff761216d2ec8b5e124';

export const getTrendingMovies = () =>
  axios.get(BASEURL + `trending/movie/day?api_key=${key}`);

export const getSearchMovie = (query, page) =>
  axios.get(
    BASEURL + `search/movie?api_key=${key}&query=${query}&page=${page}`,
  );

export const getMovieDetails = id =>
  axios.get(BASEURL + `movie/${id}?api_key=${key}`);

export const getMovieCredits = id =>
  axios.get(BASEURL + `movie/${id}/credits?api_key=${key}`);

export const getMovieReviews = id =>
  axios.get(BASEURL + `movie/${id}/reviews?api_key=${key}&page=1`);
