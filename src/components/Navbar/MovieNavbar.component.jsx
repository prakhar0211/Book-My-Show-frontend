import React, { useContext } from "react";
import { BiChevronDown, BiShareAlt } from "react-icons/bi";
import { IoShareSocialOutline, IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

// context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {
    const { movie } = useContext(MovieContext);
    return (
        <>
            <div className="text-white flex items-center justify-between py-3">
                <div>
                    <h3 className="text-3xl font-bold">{movie.original_title}</h3>
                </div>
                <div className="w-7 h-7">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
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
                    <div className="h-8 w-8 text-white"><FiMenu className="w-full h-full" /></div>
                </div>
            </div>
        </>
    )
}


const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bmsgray-700 lg:px-4 md:px-2 px-1 py-2">
                <div className="md:hidden"><NavSm /></div>
                <div className="hidden md:block lg:hidden"><NavSm /></div>
                <div className="hidden lg:flex"><NavLg /></div>
            </nav>
        </>
    );
};

export default MovieNavbar;