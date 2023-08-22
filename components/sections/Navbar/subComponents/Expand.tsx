import { FC } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import { NavbarArray, NavbarItemType } from "../../../../sanity/lib/ProductsDataArrayAndType"
import Link from "next/link"
import { useState } from "react"

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpended, setExpended] = useState<boolean>(false);
    const [isTimeOut, setTimeOut] = useState<boolean>(false);

    return (
        <li className={`duration-300 list-none`}>
            <div className=" text-black py-2 px-3 flex duration-300 rounded-md hover:bg-teal-600 hover:text-white items-center justify-between">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
            </div>
        </li>
    )
}

export default Expand