import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setTotalPages } from '../slice/paintingsSlice';
import { Painting } from '@/app/types/common';

export const paintingsApi = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  // tagTypes: ['Painting'],
  endpoints: (builder) => ({
    getPaintingsByPage: builder.query<Painting[], { page: number, limit:number, search: string }>({
      query: ({ page, limit, search }) => ({
        url: '/paintings',
        params: {
          _limit: limit,
          _page: page,
          q: search,
        },
      }),
      transformResponse: (response: Painting[]) => response,
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { meta } = await queryFulfilled;
        const totalPaintings = meta?.response?.headers.get('x-total-count');
        dispatch(setTotalPages((Math.ceil(Number(totalPaintings) / 6))));
      },
    }),
  }),
});

export const { useGetPaintingsByPageQuery } = paintingsApi;
