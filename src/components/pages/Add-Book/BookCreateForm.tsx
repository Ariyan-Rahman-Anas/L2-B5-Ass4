import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Combobox } from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { bookGenre } from "@/constants"
import { catchApiError } from "@/lib/catchApiError"
import { useCreateBookMutation } from "@/redux/API/bookApi"
import type { BookI, ErrorResponseI } from "@/types"
import { BookCreateSchema } from "@/zodSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"

const BookCreateForm = () => {
    const navigate = useNavigate()
    const { reset, register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(BookCreateSchema),
        defaultValues: {
            available: true,
        }
    })

    const [createBook, { isLoading: isCreating, error: createError }] = useCreateBookMutation()
    useEffect(() => {
        if (createError) {
            catchApiError(createError as ErrorResponseI);
        }
    }, [createError]);


    const handleSubmitForm = async (data: BookI) => {
        try {
            const res = await createBook(data).unwrap();
            toast.success(res?.message);
            reset();
            navigate("/all-books")
        } catch (error: unknown) {
            catchApiError(error as ErrorResponseI);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full max-w-xl mx-auto space-y-2">
            <Input
                placeholder="Enter title"
                {...register("title")}
                className={`input-field ${errors.title ? 'border-red-500' : ''}`}
            />
            <div className="flex flex-col md:flex-row gap-2">
                <Input placeholder="Enter author's name" {...register("author")} />
                <Combobox
                    items={bookGenre} {...register("genre")}
                    value={watch("genre")}
                    onChange={(val:string) => setValue("genre", val)} />
            </div>
            <Input placeholder="Enter ISBN number" {...register("isbn")} />
            <Input type="number" placeholder="Enter copies" {...register("copies", { valueAsNumber: true })}
            />
            <Textarea placeholder="Enter description" {...register("description")} />

            <div className="flex items-center gap-2 w-fit">
                <Checkbox id="available" defaultChecked className="cursor-pointer"{...register("available")} />
                <label htmlFor="available" className="font-medium cursor-pointer" >Available?</label>
            </div>
            <div className="w-full max-w-sm mx-auto mt-6">
                <Button disabled={isCreating} type="submit" className="w-full">{isCreating ? "Creating..." : "Create Book"}</Button>
            </div>
        </form>
    )
}
export default BookCreateForm