import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useSingleBookQuery, useUpdateBookMutation } from "@/redux/API/bookApi"
import type { BookI, ErrorResponseI } from "@/types"
import { Edit } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { BookEditSchema } from "@/zodSchema"
import { useEffect } from "react"
import { catchApiError } from "@/lib/catchApiError"
import { toast } from "sonner"
import { Combobox } from "@/components/ui/combobox"
import { dropdownItems } from "@/constants"


const BookEditForm = ({ id }) => {
    const { data: singleBook } = useSingleBookQuery(id)
    const theBook = singleBook?.data

    const { register, reset, handleSubmit } = useForm<BookI>({
        resolver: zodResolver(BookEditSchema),
        defaultValues: {
            // title: theBook?.title,
            // author: theBook?.author,
            // genre: theBook?.genre,
            // copies: theBook?.copies,
            // description: theBook.description,
            // isbn: theBook?.isbn,
            // available: theBook?.available
        }
    })

    const [updateBook, { isLoading, error: createError }] = useUpdateBookMutation()

    useEffect(() => {
        if (createError) {
            catchApiError(createError as ErrorResponseI);
        }
    }, [createError]);


    const handleSubmitForm = async (data: BookI) => {
        try {
            const res = await updateBook({
                ...data,
                id: id,
            }).unwrap();
            toast.success(res?.message);
            reset();
        } catch (error: unknown) {
            catchApiError(error as ErrorResponseI);
        }
    };

    return (

        <Dialog>
            <DialogTrigger><Edit className="cursor-pointer" size={18} /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Input<BookI> name="title" />
                    <Input<BookI> name="author" />
                    <Input<BookI> name="genre" />
                    
                    <Combobox items={dropdownItems} />
                    

                </form>
            </DialogContent>
        </Dialog>

    )
}
export default BookEditForm