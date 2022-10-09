import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import type {Pokemon} from './types';

// Define a service using a base URL and expected endpoints
export const randomApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://random-data-api.com/api/users/random_user?size=10',
  }),
  endpoints: builder => ({
    getMovies: builder.query<any, string>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMoviesQuery} = randomApi;
