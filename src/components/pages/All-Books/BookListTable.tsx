import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useAllBooksQuery} from "@/redux/API/bookApi";
import type { BookI } from "@/types";
import BookEditForm from "./BookEditForm";
import DeleteModal from "./DeleteModal";

const BookListTable = () => {
    const { data: booksData, isLoading, isError } = useAllBooksQuery(undefined);
    const books = booksData?.data ?? [];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Failed to load books.</p>;

    return (
        <div>
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
                            <TableCell className="flex items-center gap-3 py-2">
                                <Button>Borrow</Button>
                                <BookEditForm id={_id} />
                                <DeleteModal id={_id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default BookListTable;