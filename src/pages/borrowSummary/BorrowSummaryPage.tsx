import ApiLoadingLoader from "@/components/ApiLoadingLoader";
import { useBorrowedBooksQuery } from "@/redux/API/borrowApi";
import type { BorrowedBooksI } from "@/types";

const BorrowSummaryPage = () => {
    const { data: borrowedBooks, isLoading } = useBorrowedBooksQuery(undefined);

    if (isLoading) {
        return <ApiLoadingLoader />
    }

    return (
        <section className="px-6 md:px-10 lg:px-20 py-10">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <h1 className="section-heading">
                    Borrowing Summary
                </h1>
                <p className="section-subheading">
                    View a detailed summary of how many times each book has been borrowed by readers in your library.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {borrowedBooks?.data?.map(
                    ({ book, totalQuantity }: BorrowedBooksI, idx: number) => (
                        <div
                            key={idx}
                            className="border border-gray-200 shadow-sm rounded-lg p-6 bg-white hover:shadow-md transition"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {book?.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-1">
                                <span className="font-medium">ISBN:</span> {book?.isbn}
                            </p>
                            <p className="text-sm text-gray-500">
                                <span className="font-medium">Borrowed:</span> {totalQuantity}{" "}
                                items
                            </p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};
export default BorrowSummaryPage;