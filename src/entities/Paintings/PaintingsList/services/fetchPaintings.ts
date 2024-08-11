import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Painting } from '../../types/paintings';

export const paintingsApi = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getPaintingsByPage: builder.query< Painting[], number>({
      query: (page) => `paintings?_page=${page}&_limit=6`,
    }),
  }),
});

export const { useGetPaintingsByPageQuery } = paintingsApi;
