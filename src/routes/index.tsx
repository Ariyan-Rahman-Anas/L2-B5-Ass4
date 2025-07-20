import Loader from "@/components/Loader";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

const App = lazy(()=> import("@/App"))
const HomePage = lazy(()=> import("@/pages/home/HomePage"))
const AllBooks = lazy(()=> import("@/pages/allBooks/AllBooksPage"))
const AddBook = lazy(()=> import("@/pages/addBook/AddBookPage"))
const BorrowSummary = lazy(()=> import("@/pages/borrowSummary/BorrowSummaryPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Loader />} >
            <App />
        </Suspense>,
        errorElement: <h1>not found!</h1>,
        children: [
            {path:"/", Component: HomePage},
            {path:"/all-books", Component: AllBooks},
            {path:"/add-book", Component: AddBook},
            {path:"/borrow-summary", Component: BorrowSummary},
        ]
    }
])
export default router