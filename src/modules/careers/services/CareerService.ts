import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVacancy } from "../../../models/IVacancy";

export const careerAPI = createApi({
  reducerPath: "careerAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Careers", "Career"],
  endpoints: (builder) => ({
    fetchAllCareers: builder.query<IVacancy[], void>({
      query: () => ({
        url: "/careers",
        params: {
          _limit: 10,
        },
      }),
      providesTags: ["Careers"],
    }),
    fetchCareerById: builder.query<IVacancy, number>({
      query: (id) => ({
        url: `/careers/${id}`,
      }),
      providesTags: ["Career"],
    }),
  }),
});
