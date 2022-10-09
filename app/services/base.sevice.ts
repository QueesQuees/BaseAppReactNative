import {
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import {BaseQueryFn, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import Config from 'react-native-config';
import {RootState} from '../store';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:8080/api/',
  // Set headers
  prepareHeaders: (headers: Headers, {getState}) => {
    // Mark requests as XMLHttpRequest
    headers.set('X-Requested-With', `XMLHttpRequest`);
    headers.set('Content-Type', 'application/json');
    // Add authorrization token to headers if exists
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  //   Token invalidated
  if (result.error && result.error.status === 401) {
    if (typeof args !== 'string' && args.url !== 'api/RenewToken') {
      // Try to get a new token
      const refreshResult: any = await baseQuery(
        '/api/RenewToken',
        api,
        extraOptions,
      );

      if (refreshResult.data.result) {
        // store the new token
        //Retry th initial query
        result = await baseQuery(args, api, extraOptions);
      } else {
        // navigate to the logout
        // resetState();
      }
    } else {
      // navigate to the logout
      // resetState();
    }
  }

  return result;
};
