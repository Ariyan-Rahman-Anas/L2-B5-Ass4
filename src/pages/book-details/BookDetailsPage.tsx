import { useAllBooksQuery } from "@/redux/API/bookApi";
import type { BookI } from "@/types";
import { useParams } from "react-router";

const BookDetailsPage = () => {
    const { id } = useParams();
    const { data: booksData } = useAllBooksQuery(undefined)
    const matchBookId = booksData?.data?.find((item: BookI) => item?._id === id)
    const { title, author, genre, available, description, isbn, copies } = matchBookId || {};

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-4">
            <h1 className="text-lg font-semibold">Book Details</h1>
            <div>
                <h1>{title}</h1>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Genre:</strong> {genre}</p>
                <p><strong>ISBN:</strong> {isbn}</p>
                <p><strong>Copies:</strong> {copies}</p>
                <p><strong>Availability:</strong> {available ? "Available" : "Not Available"}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default BookDetailsPage;