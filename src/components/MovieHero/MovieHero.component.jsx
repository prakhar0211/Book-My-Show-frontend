import React from 'react'

const MovieHero = () => {
    return (
        <>
            <div>
                <div className="relative md:hidden w-full " style={{ height: "calc(180vw)" }}>
                    <div className="w-full h-48 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="poster"
                        className="h-full w-full" />
                </div>
                <div className="relative hidden md:block w-full lg:hidden" style={{ height: "calc(140vw)" }}>
                    <div className=" w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="poster"
                        className="h-full w-full" />
                </div>
                <div className="hidden lg:block relative" style={{ height: "30rem" }}>
                    <div className="absolute z-10 w-full  h-full" style={{backgroundImage:
                    "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    <div className="absolute w-64 h-96 z-30 left-32 top-10">
                        <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="poster"
                        className="h-full w-full rounded-2xl"/>
                    </div>
                    <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="poster"
                        className="h-full w-full" />
                </div>
            </div>
        </>
    )
}

export default MovieHero
