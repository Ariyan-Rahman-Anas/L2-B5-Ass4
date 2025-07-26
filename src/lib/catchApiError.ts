import type { ErrorResponseI } from "@/types";
import { toast } from "sonner";

export function catchApiError(error: ErrorResponseI): void {
  const fieldErrors = error?.error?.errors;

  if (
    fieldErrors &&
    typeof fieldErrors === "object" &&
    Object.keys(fieldErrors).length > 0
  ) {
    Object.entries(fieldErrors).forEach(([field, fieldError]) => {
      const message = (fieldError as any)?.message;
      toast.error(`${field}: ${message}`);
      toast.error(`${message}`);
    });
  } else {
    console.log({error})
    toast.error(error?.message);
  }
}