import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import type {Pokemon} from './types';

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://reactnative.dev/'}),
  endpoints: builder => ({
    getMovies: builder.query<any, string>({
      query: () => ({
        url: 'movies.json',
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMoviesQuery} = moviesApi;
