import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Menu from "./menu";
import { useState } from "react";
const Appbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="  pt-3 ">
            <div className="flex items-center justify-between shadow-md px-2 pb-2">
                {!isMenuOpen && <AiOutlineMenu className=" text-lg" onClick={() => setIsMenuOpen(!isMenuOpen)} />}
                {isMenuOpen && <GrClose className=" text-lg" onClick={() => setIsMenuOpen(!isMenuOpen)} />}
                <h1 className="text-lg">Peniel Foundation</h1>
            </div>
            {isMenuOpen && <Menu />}
        </div>
    )
}
export default Appbar