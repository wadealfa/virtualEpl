import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GameApiSlice = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://virtualepl-node-1.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMatches: builder.query({
      query: () => "/matches",
    }),
    postPlayerChoice: builder.mutation({
      query: (choice) => ({
        url: "/matches/userId",
        method: "POST",
        body: choice,
      }),
    }),
  }),
});

export const { useGetMatchesQuery, usePostPlayerChoiceMutation } = GameApiSlice;
