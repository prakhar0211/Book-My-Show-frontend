import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col items-start  lg:px-4 md:px-4 px-3">
                <div className="lg:h-80 md:h-96 h-96 w-full">
                    <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-md" />
                </div>
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.original_title}</h3>
                <p className={`text-sm md:mb-4 mb-3 ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
            </div>
        </Link>
    )
}

export default Poster;