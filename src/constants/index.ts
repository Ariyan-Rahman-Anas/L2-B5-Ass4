import type { DropdownI, NavItemI } from "@/types";

export const navItems: NavItemI[] = [
    {title:"All Books", route:"all-books"},
    {title:"Add Book", route:"add-book"},
    {title:"Borrow Summary", route:"borrow-summary"}
]


export const bookGenre: DropdownI[] = [
    {value: "FICTION", label: "Fiction"},
    {value: "NON_FICTION", label: "Non-fiction"},
    {value: "SCIENCE", label: "Science"},
    {value: "HISTORY", label: "History"},
    {value: "BIOGRAPHY", label: "Biography"},
    {value: "FANTASY", label: "Fantasy"}
]


export const dropdownItems:DropdownI[] = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]