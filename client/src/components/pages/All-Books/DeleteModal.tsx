import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { catchApiError } from "@/lib/catchApiError";
import { useDeleteBookMutation } from "@/redux/API/bookApi";
import type { ErrorResponseI } from "@/types";
import { Trash } from "lucide-react"
import { useEffect } from "react";
import { toast } from "sonner";

const DeleteModal = ({id}:string) => {

    const [deleteBook, { isLoading: isDeleting, error: deleteError }] = useDeleteBookMutation()

    useEffect(() => {
        if (deleteError) {
            catchApiError(deleteError as ErrorResponseI);
        }
    }, [deleteError]);


    const handleDeleteBook = async () => {
        try {
            const res = await deleteBook(id).unwrap();
            toast.success(res?.message);
        } catch (error: unknown) {
            catchApiError(error as ErrorResponseI);
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Trash className="cursor-pointer" size={18} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <Button onClick={handleDeleteBook} >Delete</Button>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteModal