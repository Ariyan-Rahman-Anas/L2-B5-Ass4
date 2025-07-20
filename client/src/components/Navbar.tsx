import { navItems } from "@/constants"
import { Button } from "./ui/button"
import type { NavItemI } from "@/types"
import { Link } from "react-router"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between sticky top-0 bg-white border-b p-2 z-50 ">
            <div id="nav-left">
                <Link to="/" className="font-bold text-3xl" >Library MS.</Link>
            </div>

            <ul id="nav-center" className="flex items-center">
                {
                    navItems.map((item: NavItemI, idx: number) => <li key={idx}>
                        <Link to={item?.route} className="px-4">{item?.title} </Link>
                    </li>)
                }
            </ul>
            
            <div id="nav-right">
                <Button>Let's talk</Button>
            </div>
        </nav>
    )
}
export default Navbar