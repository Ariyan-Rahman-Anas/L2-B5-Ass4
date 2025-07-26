import { baseApi } from "./baseApi";

const bookApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Books"]
        }),
        // allBooks: builder.query({
        //     query: () => ({ url: "/books" }),
        //     providesTags: ["Books"]
        // }),
        allBooks: builder.query({
            query: (params) => ({
                url: "/books",
                params, // { limit, skip, sortBy, sort, filter }
            }),
            providesTags: ["Books"],
        }),
        singleBook: builder.query({
            query: (id) => ({ url: `/books/${id}` }),
            providesTags: ["Books"]
        }),
        updateBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"]
        })
    })
})

export const {
    useCreateBookMutation,
    useAllBooksQuery,
    useSingleBookQuery,
    useUpdateBookMutation,
    useDeleteBookMutation
} = bookApi