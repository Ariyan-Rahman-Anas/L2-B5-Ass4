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
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DeleteModal = ({ id }: { id: string }) => {
    const [open, setOpen] = useState(false)

    const [deleteBook, { isLoading: isDeleting, error: deleteError }] = useDeleteBookMutation()
    useEffect(() => {
        if (deleteError) {
            catchApiError(deleteError as ErrorResponseI);
        }
    }, [deleteError]);
    const handleDeleteBook = async () => {
        try {
            const res = await deleteBook(id).unwrap();
            toast.success(res?.message)
            setOpen(false)
        } catch (error: unknown) {
            catchApiError(error as ErrorResponseI);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Trash className="cursor-pointer" size={18} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete related data from our server
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center gap-4 mt-4 w-full">
                    <Button variant="outline" disabled={isDeleting} onClick={() => setOpen(false)} className="w-28" >Cancel</Button>
                    <Button disabled={isDeleting} onClick={handleDeleteBook} className="w-28">{isDeleting ? "Deleting..." : "Delete"}</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default DeleteModal