import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GameApiSlice = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      console.log("Making request with headers:", headers);
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
