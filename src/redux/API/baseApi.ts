import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        credentials: "include"
    }),
    tagTypes: ["Books", "Borrows"],
    endpoints:()=>({})
})