export interface FieldError {
  message: string;
  name: string;
  path: string | string[];
  value: any;
  properties?: Record<string, any>;
  kind?: string;
}

export interface ErrorResponseI {
  status: boolean;
  message: string;
  error: {
    name: string;
    errors: {
      [field: string]: FieldError;
    };
  };
}

export interface NavItemI {
  title: string
  route: string
}

export type BookGenre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface BookI {
  author: string
  available: boolean
  copies: number
  description: string
  genre: BookGenre
  isbn: string
  title: string
}

export interface DropdownI {
  value: string
  label: string
}
export interface ComboboxProps {
  items: DropdownI[];
}