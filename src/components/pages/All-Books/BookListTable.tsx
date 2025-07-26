// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import { useAllBooksQuery } from "@/redux/API/bookApi";
// import type { BookI } from "@/types";
// import BookEditForm from "./BookEditForm";
// import DeleteModal from "./DeleteModal";
// import BookBorrowForm from "./BookBorrowForm";
// import ApiLoadingLoader from "@/components/ApiLoadingLoader";
// import { Eye } from "lucide-react";
// import { Link } from "react-router";

// const BookListTable = () => {
//     const { data: booksData, isLoading, isError } = useAllBooksQuery(undefined);
//     const books = booksData?.data ?? [];

//     if (isLoading) return <ApiLoadingLoader />;
//     if (isError) return <p>Failed to load books.</p>;

//     return (
//         <div>
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>Title</TableHead>
//                         <TableHead>Author</TableHead>
//                         <TableHead>Genre</TableHead>
//                         <TableHead>ISBN</TableHead>
//                         <TableHead>Copies</TableHead>
//                         <TableHead>Availability</TableHead>
//                         <TableHead>Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {books.map(({ _id, title, author, genre, isbn, copies, available }: BookI) => (
//                         <TableRow key={_id}>
//                             <TableCell className="font-medium">{title}</TableCell>
//                             <TableCell>{author}</TableCell>
//                             <TableCell>{genre}</TableCell>
//                             <TableCell>{isbn}</TableCell>
//                             <TableCell>{copies}</TableCell>
//                             <TableCell>
//                                 <span className={`badge ${available ? "badge-green" : "badge-red"}`}>
//                                     {available ? "Available" : "Not Available"}
//                                 </span>
//                             </TableCell>
//                             <TableCell className="flex items-center gap-4 py-2">
//                                 <BookBorrowForm id={_id} copies={copies} available={available} />
//                                 <Link to={`/book-details/${_id}`}>
//                                     <Eye size={18} className="cursor-pointer" />
//                                 </Link>
//                                 <BookEditForm id={_id} />
//                                 <DeleteModal id={_id} />
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };
// export default BookListTable;













import { useState } from "react";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useAllBooksQuery } from "@/redux/API/bookApi";
import type { BookI } from "@/types";
import BookEditForm from "./BookEditForm";
import DeleteModal from "./DeleteModal";
import BookBorrowForm from "./BookBorrowForm";
import ApiLoadingLoader from "@/components/ApiLoadingLoader";
import { Eye } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const LIMIT = 8;

const BookListTable = () => {
    const [page, setPage] = useState(1);
    const skip = (page - 1) * LIMIT;

    const { data, isLoading, isError } = useAllBooksQuery({ limit: LIMIT, skip });
    const books = data?.data ?? [];
    const total = data?.meta?.total ?? 0;
    const totalPages = Math.ceil(total / LIMIT);
    console.log(totalPages)

    if (isLoading) return <ApiLoadingLoader />;
    if (isError) return <p>Failed to load books.</p>;

    return (
        <div className="space-y-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>Copies</TableHead>
                        <TableHead>Availability</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map(({ _id, title, author, genre, isbn, copies, available }: BookI) => (
                        <TableRow key={_id}>
                            <TableCell className="font-medium">{title}</TableCell>
                            <TableCell>{author}</TableCell>
                            <TableCell>{genre}</TableCell>
                            <TableCell>{isbn}</TableCell>
                            <TableCell>{copies}</TableCell>
                            <TableCell>
                                <span className={`badge ${available ? "badge-green" : "badge-red"}`}>
                                    {available ? "Available" : "Not Available"}
                                </span>
                            </TableCell>
                            <TableCell className="flex items-center gap-4 py-2">
                                <BookBorrowForm id={_id} copies={copies} available={available} />
                                <Link to={`/book-details/${_id}`}>
                                    <Eye size={18} className="cursor-pointer" />
                                </Link>
                                <BookEditForm id={_id} />
                                <DeleteModal id={_id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Pagination controls */}
            <div className="flex justify-end gap-2 mt-4">
                <Button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="disabled:opacity-50"
                >
                    Previous
                </Button>
                <span className="px-3 py-1">
                    Page {page} of {totalPages}
                </span>
                <Button
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    className="disabled:opacity-50"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default BookListTable;