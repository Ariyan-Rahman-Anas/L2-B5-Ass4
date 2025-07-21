import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
    useSingleBookQuery,
    useUpdateBookMutation,
} from "@/redux/API/bookApi";
import type { ErrorResponseI } from "@/types";
import { Edit } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookEditSchema } from "@/zodSchema";
import { useEffect, useState } from "react";
import { catchApiError } from "@/lib/catchApiError";
import { toast } from "sonner";
import { Combobox } from "@/components/ui/combobox";
import { bookGenre } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type z from "zod";

const BookEditForm = ({ id }: { id: string }) => {
    const [open, setOpen] = useState(false)

    const { data: singleBook } = useSingleBookQuery(id);
    const theBook = singleBook?.data;

    type BookEditInput = z.infer<typeof BookEditSchema>;

    const {
        register,
        reset,
        handleSubmit,
        formState,
        control,
    } = useForm<BookEditInput>({
        resolver: zodResolver(BookEditSchema),
        defaultValues: {},
    });

    useEffect(() => {
        if (theBook) {
            reset({
                title: theBook.title,
                author: theBook.author,
                genre: theBook.genre,
                copies: theBook.copies,
                description: theBook.description,
                isbn: theBook.isbn,
                available: theBook.available,
            });
        }
    }, [theBook, reset]);

    const [updateBook, { isLoading: isUpdating, error: updateError }] =
        useUpdateBookMutation();

    useEffect(() => {
        if (updateError) {
            catchApiError(updateError as ErrorResponseI);
        }
    }, [updateError]);

    const handleSubmitForm = async (data: BookEditInput) => {
        try {
            const dirtyFields = formState.dirtyFields;

            const changedData: Partial<BookEditInput> = {};
            for (const key in dirtyFields) {
                const typedKey = key as keyof BookEditInput;
                if (dirtyFields[typedKey]) {
                    const value = data[typedKey];
                    if (value !== undefined) {
                        changedData[typedKey] = value;
                    }
                }
            }

            const res = await updateBook({ id, data: changedData }).unwrap();
            toast.success(res?.message);
            setOpen(false)
            reset(); // optionally reset to latest book state again
        } catch (error: unknown) {
            catchApiError(error as ErrorResponseI);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Edit className="cursor-pointer" size={18} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
                    <DialogDescription>
                        Make changes to your book. Only changed fields will be updated.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-2">
                    <Input {...register("title")} placeholder="Enter title" />

                    <div className="flex items-center gap-2">
                        <Input
                            {...register("author")}
                            placeholder="Enter author's name"
                        />
                        <Controller
                            name="genre"
                            control={control}
                            render={({ field }) => (
                                <Combobox
                                    items={bookGenre}
                                    value={field.value ?? ""}
                                    onChange={(val) =>
                                        field.onChange(val as BookEditInput["genre"])
                                    }
                                />
                            )}
                        />
                    </div>

                    <Input placeholder="Enter ISBN number" {...register("isbn")} />
                    <Input
                        type="number"
                        placeholder="Enter copies"
                        {...register("copies", { valueAsNumber: true })}
                    />
                    <Textarea
                        placeholder="Enter description"
                        {...register("description")}
                    />

                    <div className="flex items-center gap-2 w-fit">
                        <Controller
                            name="available"
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    id="available"
                                    checked={field.value}
                                    onCheckedChange={(val) =>
                                        field.onChange(val as boolean)
                                    }
                                    className="cursor-pointer"
                                />
                            )}
                        />
                        <label htmlFor="available" className="font-medium cursor-pointer">
                            Available?
                        </label>
                    </div>

                    <div className="w-full max-w-sm mx-auto mt-6">
                        <Button disabled={isUpdating} type="submit" className="w-full">
                            {isUpdating ? "Updating..." : "Update Book"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BookEditForm;