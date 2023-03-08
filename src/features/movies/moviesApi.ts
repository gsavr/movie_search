import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = "cf86d2e4ab2f4b0b5565c10e478cf8ed";
const year = new Date().getFullYear();
const page = Math.floor(Math.random() * 5) + 1;

//Now Playing
export const findNowPlaying = createAsyncThunk(
  "movieSearch/fetchNowPlaying",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results.slice(0, 20);
  }
);

//Now Playing
export const findTrendingMovies = createAsyncThunk(
  "movieSearch/fetchTrendingMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results.slice(0, 20);
  }
);

export const findMoviesByGenre = createAsyncThunk(
  "movieSearch/fetchMoviesByGenre",
  async (genre: { code: number }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${genre.code}&primary_release_year=${year}`
    );
    // The value we return becomes the `fulfilled` action payload
    return { data: response.data.results.slice(0, 15), genre: genre.code };
  }
);

export const findMoviesBySearch = createAsyncThunk(
  "movieSearch/fetchMoviesBySearch",
  async (movie: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movie}&page=1&include_adult=false`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results.slice(0, 15);
  }
);

export const findMovieDetail = createAsyncThunk(
  "movieSearch/fetchMovieDetail",
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const findMovieCast = createAsyncThunk(
  "movieSearch/fetchMovieCast",
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.cast.slice(0, 20);
  }
);

export const findCastDetail = createAsyncThunk(
  "movieSearch/fetchCastDetail",
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const findMoviesByActor = createAsyncThunk(
  "movieSearch/fetchMoviesByActor",
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.cast.slice(0, 15);
  }
);

export const findRecommendedMovies = createAsyncThunk(
  "movieSearch/fetchRecommendedMovies",
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=${page}`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results.slice(0, 10);
  }
);
