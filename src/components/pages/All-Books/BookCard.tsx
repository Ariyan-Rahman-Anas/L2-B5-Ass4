import type { BookI } from "@/types"
import { User2 } from "lucide-react"
import BookBorrowForm from "./BookBorrowForm"
import { Link } from "react-router"

const BookCard = ({ book }: { book: BookI }) => {
    const { title, author, available, description, genre, _id, copies } = book || {}

    return (
        <div className="border border-gray-200 shadow-sm rounded-lg p-3 text-gray-500 bg-white hover:shadow-md transition space-y-2 w-full ">
            <Link to={`book-details/${_id}`}>
                <h1 className="text-black font-semibold">{title}</h1>
            </Link>
            <div className="mt-2">
                <div className="flex items-center gap-1.5">
                    <User2 size={18} className="border border-gray-500 rounded-full" />
                    <h2>{author}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <h3>{genre}</h3>
                    <p className={`badge ${available ? "badge-green" : "badge-red"}`}>{available ? "Available" : "Unavailable"}</p>
                </div>
            </div>
            <p className="h-12 overflow-hidden">{description.slice(0, 50)}... <Link to={`book-details/${_id}`} className="text-blue-600 font-semibold text-sm" >See more</Link></p>
            <div className="flex justify-end">
                <BookBorrowForm id={_id} copies={copies} available={available} />
            </div>
        </div>
    )
}
export default BookCard