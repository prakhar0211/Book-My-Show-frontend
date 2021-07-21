import React from "react";

const Poster = (props) => {
    return(
        <>
            <div className="flex flex-col items-start gap-2 lg:px-4 md:px-5 px-3">
                <div className="lg:h-80 md:h-96 h-80">
                    <img src={props.src} alt= {props.title} className="w-full h-full rounded-md"/>
                </div>
                <h3 className={`text-lg font-bold ${props.isDark ? "text-white": "text-gray-700"}`}>{props.title}</h3>
                <p className={`text-sm md:mb-4 mb-3 ${props.isDark ? "text-white": "text-gray-700"}`}>{props.subtitle}</p>
            </div>
        </>
    )
}

export default Poster;