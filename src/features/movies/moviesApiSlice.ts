import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = "cf86d2e4ab2f4b0b5565c10e478cf8ed";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints(builder) {
    return {
      fetchNowPlaying: builder.query<any, void>({
        query() {
          return `/movie/now_playing?api_key=${key}&language=en-US&page=1`;
        },
      }),
      fetchGenreMovies: builder.query<any, any>({
        query({ genre, year }) {
          return `/discover/movie?api_key=${key}&language=en-US&with_genres=${genre.code}&primary_release_year=${year}`;
        },
      }),
    };
  },
});

export const { useFetchNowPlayingQuery, useFetchGenreMoviesQuery } = apiSlice;
