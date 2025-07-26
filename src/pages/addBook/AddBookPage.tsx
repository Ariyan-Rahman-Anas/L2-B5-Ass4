import BookCreateForm from "@/components/pages/Add-Book/BookCreateForm"

const AddBookPage = () => {
    return (
        <div className="page-setup">
            <h1 className="section-heading">Add Book</h1>
            <p className="section-subheading">
                Fill out the form below to add a new book to the library's collection.
            </p>
            <BookCreateForm />
        </div>
    )
}
export default AddBookPage