import { useState } from "react";
import {FiAlignCenter, FiXCircle} from "react-icons/fi";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeNav = () => setNav(!nav);

    const [navColor, setNavColor] = useState(false);
    const changeNavBarColor = () => {
        if(window.scrollY >= 10) {
        setNavColor(true)
    } else {
        setNavColor (false)
    }
}
window.addEventListener("scroll", changeNavBarColor);

    return (
        <nav 
            className={"fixed w-full flex justify-between items-center px-6 z-50 py-3 transition-colors duration-500 " + 
            (navColor && "bg-gray-700 shadow-md")}>
            {/* logo */}
            <a href="#home" className="font-bold italic text-white text-xl z-20" onClick={changeNav}>
                Samuel Kayode
            </a>

            {/* Navigation */}
            <div 
            className={
            "cursor-pointer flex gap-x-8 text-lg font-medium text-white md:top-0 md:left-0 md:h-screen md:w-full md:bg-gray-800 md:flex-col md:items-center md:justify-center md:gap-y-4 md:text-5xl z-10 " +
            (nav ? "md:fixed" : "md:hidden")
            }
            >
                <a href="#home" className="hover:underline" onClick={changeNav}>Home</a>
                <a href="#about" className="hover:underline" onClick={changeNav}>About</a>
                <a href="#skills" className="hover:underline" onClick={changeNav}>Skills</a>
                <a href="#projects" className="hover:underline" onClick={changeNav}>Projects</a>
                <a href="#contact" className="hover:underline" onClick={changeNav}>Contact</a>
            </div>
            {/* Hamburger  */}
            <div 
            onClick={changeNav}
            className="hidden md:block cursor-pointer text-white text-3xl z-20"
            >
                {nav ? <FiXCircle/> : <FiAlignCenter />}
            </div>
        </nav>
    )
}

export default Navbar