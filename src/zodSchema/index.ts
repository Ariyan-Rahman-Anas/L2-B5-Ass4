import z from "zod";

export const BookCreateSchema = z.object({
  title: z.string().min(3, "Please enter book title"),
  author: z.string().min(3, "Please enter book author's name"),
  genre: z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"]),
  isbn: z.string().min(3, "Please enter ISBN number"),
  description: z.string().min(10, "Please enter book description"),
  copies: z.number().min(0, "Please enter number of available copies"),
  available: z.boolean().default(true),
});

export const BookEditSchema = BookCreateSchema.partial();