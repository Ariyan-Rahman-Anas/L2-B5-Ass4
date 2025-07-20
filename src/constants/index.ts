import type { DropdownI, NavItemI } from "@/types";

export const navItems: NavItemI[] = [
    {title:"All Books", route:"all-books"},
    {title:"Add Book", route:"add-book"},
    {title:"Borrow Summary", route:"borrow-summary"}
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