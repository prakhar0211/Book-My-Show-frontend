import React from 'react'

const MovieInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="flex items-center lg:gap-3 gap-2 md:pl-5 lg:pl-0 pl-4 ">
                    <div className="w-24 h-5 ">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premiere"
                            className="w-full h-full" />
                    </div>
                    <span className="hidden lg:block bg-transparent p-1 text-white text-xs rounded-lg">Streaming Now</span>
                    <span className="bg-bmsgray-700 lg:hidden px-2 text-white text-xs rounded-lg">Streaming Now</span>
                </div>
                <h1 className="hidden lg:block text-white text-4xl font-bold">Zack Snyder`s Justice League</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-5 lg:gap-8">
                    <div className="text-white font-light flex flex-col lg:gap-4 gap-3 lg:pl-0 md:pl-5 pl-5">
                        <h4 className="text-xs">4k &bull; English &bull; ACTION</h4>
                        <h4 className="text-xs">1h 53m &bull; Action,   Thriller, Sci-fi &bull; 16+</h4>
                    </div>
                    <div className="flex items-center gap-4 md:w-screen w-screen md:px-4 lg:px-0 px-4 lg:w-full ">
                        <button className="bg-bcolor-300 w-full py-2 text-white font-semibold rounded-lg">Rent ₹149</button>
                        <button className="bg-bcolor-300 w-full py-2 text-white font-semibold rounded-lg">Buy ₹149</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieInfo;
