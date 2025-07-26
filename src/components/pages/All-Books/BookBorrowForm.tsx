import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { catchApiError } from "@/lib/catchApiError";
import { useBorrowBookMutation } from "@/redux/API/borrowApi";
import type { BorrowBookI, ErrorResponseI } from "@/types";
import { BorrowBookSchema } from "@/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const BookBorrowForm = ({ id, copies, available }: { id: string, copies: number, available: boolean }) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const { register, reset, handleSubmit } = useForm<BorrowBookI>({
        resolver: zodResolver(BorrowBookSchema)
    })

    const [borrowBook, { isLoading: isBorrowing, error: borrowError }] = useBorrowBookMutation()
    const borrowErr = (borrowError as any)?.data
    useEffect(() => {
        if (borrowErr) {
            catchApiError(borrowErr as ErrorResponseI);
        }
    }, [borrowErr]);


    const handleSubmitForm = async (data: BorrowBookI) => {
        const borrowData = {
            ...data,
            book: id,
            dueDate: new Date(data?.dueDate).toISOString()
        }
        const res = await borrowBook(borrowData).unwrap();
        toast.success(res?.message);
        reset();
        setOpen(false)
        navigate("/borrow-summary")
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button
                    disabled={copies == 0 || !available}
                    className={`${(copies==0 || !available) ? "cursor-not-allowed" : ""}`} >
                    Borrow
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Borrow Book</DialogTitle>
                    <DialogDescription>
                        Borrow your desire book and remember the due date
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-2">
                    <Input type="number" {...register("quantity", { valueAsNumber: true })} placeholder="Enter quantity" />

                    <Input
                        type="date"
                        placeholder="Enter due date"
                        {...register("dueDate")}
                    />

                    <div className="w-full max-w-sm mx-auto mt-6">
                        <Button disabled={isBorrowing} type="submit" className="w-full">
                            {isBorrowing ? "Borrowing..." : "Borrow Book"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default BookBorrowForm