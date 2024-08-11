import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Painting } from '../../types/paintings';

export const paintingsApi = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPaintingsByPage: builder.query<Painting[], {page: number, limit:number, search: string}>({
      query: ({ page, limit, search }) => ({
        url: 'paintings',
        params: {
          _limit: limit,
          _page: page,
          q: search,
        },
      }),
    }),
  }),
});

export const { useGetPaintingsByPageQuery } = paintingsApi;
