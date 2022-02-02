import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
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

export const { useSavePlanMutation } = scheduleApi