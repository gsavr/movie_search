import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = "cf86d2e4ab2f4b0b5565c10e478cf8ed";
const year = new Date().getFullYear();

//Now Playing
export const findNowPlaying = createAsyncThunk(
  "movieSearch/fetchNowPlaying",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${
        Math.floor(Math.random() * 5) + 1
      }`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results;
  }
);

export const findMoviesByGenre = createAsyncThunk(
  "movieSearch/fetchMoviesByGenre",
  async (genre: any) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${genre.code}&primary_release_year=${year}`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results;
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
    return response.data.cast;
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
    return response.data.cast;
  }
);

export const findRecommendedMovies = createAsyncThunk(
  "movieSearch/fetchRecommendedMovies",
  async (id: string | undefined) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=${
        Math.floor(Math.random() * 5) + 1
      }`
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data.results;
  }
);
