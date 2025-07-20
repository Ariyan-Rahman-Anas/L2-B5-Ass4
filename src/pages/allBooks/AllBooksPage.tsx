import BookListTable from "@/components/pages/All-Books/BookListTable"

const AllBooksPage = () => {
    return (
        <div className="page-setup">
            <h1 className="section-heading">All Books</h1>
            <h2 className="section-subheading">Browse and manage the complete list of books.</h2>
            <BookListTable />
        </div>
    )
}
export default AllBooksPage