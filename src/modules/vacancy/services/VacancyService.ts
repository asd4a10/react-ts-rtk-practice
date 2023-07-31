import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVacancy } from "../../../models/IVacancy";

export const vacancyAPI = createApi({
  reducerPath: "vacancyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/vacancies",
  }),
  tagTypes: ["Vacancy"],
  endpoints: (builder) => ({
    fetchAllVacancies: builder.query<IVacancy[], number>({
      query: (limit: number = 10) => ({
        url: "",
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Vacancy"],
    }),
  }),
});
