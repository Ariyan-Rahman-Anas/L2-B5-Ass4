// import { ErrorResponseI } from "@/types";
// import { toast } from "sonner";

// export function catchApiError(error: ErrorResponseI): void {
//   const payload = error?.data?.error?.payload;

//   if (
//     payload &&
//     typeof payload === "object" &&
//     Object.keys(payload).length > 0
//   ) {
//     Object.entries(payload).map(([key, value]) =>
//       toast.error(`${key}: ${value}`)
//     );
//   } else {
//     toast.error(error?.data?.message || "Unknown validation error");
//   }
// }







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
      const message = (fieldError as any)?.message || "Invalid value";
      toast.error(`${field}: ${message}`);
    });
  } else {
    toast.error(error?.message || "Unknown error occurred");
  }
}