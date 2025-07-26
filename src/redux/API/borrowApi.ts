import { baseApi } from "./baseApi";

const borrowApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        borrowBook: builder.mutation({
            query: (data) => ({
                url: "/borrow",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Borrows", "Books"]
        }),
        borrowedBooks: builder.query({
            query: () => ({
                url:"/borrow"
            }),
            providesTags:["Borrows"]
        })
    })
})

export const {
    useBorrowBookMutation,
    useBorrowedBooksQuery
} = borrowApi