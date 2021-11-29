import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ITodo, IUser } from "../scheme/typicode";

export const api = createApi({
  reducerPath: "typicode",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    listUsers: builder.query<IUser[], void>({
      query: () => "users",
    }),
    getTodos: builder.query<ITodo[], number>({
      query: (userId) => `todos?userId=${userId}`,
    }),
  }),
});

export const { useListUsersQuery, useGetTodosQuery } = api;

export default api;
