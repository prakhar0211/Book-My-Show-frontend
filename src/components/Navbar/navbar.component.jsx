import React from "react";
import { BiChevronRight,BiChevronDown } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-300 text-xs flex items-center">
                        Kanpur <BiChevronRight />
                    </span>
                </div>
                <div className="w-6 h-6">
                    <IoIosSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded">
            <IoIosSearch  />
            <input type="search" className="w-full bg-transparent border-none focus:outline-none " placeholder="Search for Movies,Events,Plays, Sports and Activities" />
        </div>
    )
};
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-32 flex items-center justify-between py-1">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-10">
                        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full h-9 flex items-center gap-3 bg-white px-3 py-2 rounded">
                        <IoIosSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none " placeholder="Search for Movies,Events,Plays, Sports and Activities" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
                        Kanpur <BiChevronDown />
                    </span>
                    <button className="bg-bcolor-300 text-white px-3 py-1 text-sm rounded">Sign in</button>
                    <div className="h-8 w-8 text-white"><FiMenu className="w-full h-full"/></div>
                </div>
            </div>
        </>
    )
}


const Navbar = () => {
    return (
        <>
            <nav className="bg-bmsgray-700 px-4 py-2">
                <div className="md:hidden"><NavSm /></div>
                <div className="hidden md:flex lg:hidden"><NavMd /></div>
                <div className="hidden lg:flex"><NavLg /></div>
            </nav>
        </>
    );
};

export default Navbar;