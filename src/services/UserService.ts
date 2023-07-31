import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/IUser";
import { ITodo } from "../models/ITodo";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["User", "Todo"],
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<IUser[], void>({
      query: () => ({
        url: "/users",
        params: {
          _limit: 5,
        },
      }),
      providesTags: ["User"],
    }),
    fetchAllTodos: builder.query<ITodo[], void>({
      query: () => ({
        url: "/todos",
        params: {
          _limit: 10,
        },
      }),
      providesTags: ["Todo"],
    }),
  }),
});
