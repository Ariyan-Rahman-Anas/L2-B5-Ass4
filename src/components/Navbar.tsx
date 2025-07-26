// import { navItems } from "@/constants"
// import { Button } from "./ui/button"
// import type { NavItemI } from "@/types"
// import { Link } from "react-router"

// const Navbar = () => {
//     return (
//         <nav className="flex items-center justify-between sticky top-0 bg-white border-b p-2 z-50 ">
//             <div id="nav-left">
//                 <Link to="/" className="font-bold text-3xl text-blue-600">Library MS.</Link>
//             </div>

//             <ul id="nav-center" className="flex items-center">
//                 {
//                     navItems.map((item: NavItemI, idx: number) => <li key={idx}>
//                         <Link to={item?.route} className="px-4">{item?.title} </Link>
//                     </li>)
//                 }
//             </ul>
            
//             <div id="nav-right">
//                 <Button>Let's talk</Button>
//             </div>
//         </nav>
//     )
// }
// export default Navbar













import { useState } from "react";
import { navItems } from "@/constants";
import { Button } from "./ui/button";
import type { NavItemI } from "@/types";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b shadow-sm px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left - Logo */}
                <div>
                    <Link to="/" className="font-bold text-2xl text-blue-600">
                        Library MS.
                    </Link>
                </div>

                {/* Center - Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item: NavItemI, idx: number) => (
                        <li key={idx}>
                            <Link
                                to={item.route}
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right - Button */}
                <div className="hidden md:block">
                    <Button>Let's talk</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    <ul className="flex flex-col items-start gap-2 px-2">
                        {navItems.map((item: NavItemI, idx: number) => (
                            <li key={idx}>
                                <Link
                                    to={item.route}
                                    className="block py-2 text-gray-700 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="px-2">
                        <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                            Let's talk
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;