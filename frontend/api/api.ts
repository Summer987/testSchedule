import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const scheduleApi = createApi({
  reducerPath: 'scheduleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    savePlan: build.mutation<any, any>({
      query: (body) => ({
        url: `posts`,
        method: 'POST',
        body,
      }),
    }),
  }),
})