import { useAllBooksQuery } from "@/redux/API/bookApi";
import BookCard from "../All-Books/BookCard";
import type { BookI } from "@/types";
import ApiLoadingLoader from "@/components/ApiLoadingLoader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Books = () => {
  const { data: booksData, isLoading } = useAllBooksQuery(undefined);

  if (isLoading) return <ApiLoadingLoader />

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-4">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            booksData?.data?.slice(0,8)?.map((book: BookI, idx: number) => <BookCard key={idx} book={book} />)
          }
        </div>
      </div>
      <div className="w-40 mx-auto">
        <Link to="/all-books" >
          <Button className="w-full">See all</Button>
        </Link>
      </div>
    </div>

  )
}
export default Books