import z from "zod";

export const BookCreateSchema = z.object({
  title: z.string().min(3, "Please enter book title"),
  author: z.string().min(3, "Please enter book author's name"),
  genre: z.string().min(1, "Please select genre"),
  isbn: z.string().min(3, "Please enter ISBN number"),
  description: z.string().min(10, "Please enter book description"),
  copies: z.number().min(0, "Please enter number of available copies"),
  available: z.boolean().default(true),
});

export const BookEditSchema = BookCreateSchema.partial();

export const BorrowBookSchema = z.object({
  quantity: z.number().min(1, "Please enter book quantity"),
  dueDate: z.string().min(1, "Please enter due date")
})