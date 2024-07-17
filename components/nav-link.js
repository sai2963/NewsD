'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



const NavLink =({href,children})=>{
    const path=usePathname();
return(
    <div>
        <Link href={href} className={path.startsWith(href) ? 'text-gray-300': undefined} >{children}</Link>
    </div>
)
}
export default NavLink;