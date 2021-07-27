import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
// import Premier from "../components/premier/premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../components/Config/tempPoster.config";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => { 
        const requestPopularMovies = async () =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    }, [])
    // console.log(popularMovies);
    useEffect(() => { 
        const requestTopRatedMovies = async () =>{
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        }
        requestTopRatedMovies();
    }, [])

    useEffect(() => { 
        const requestUpcomingMovies = async () =>{
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    }, [])

    return (
        <>
            <div className="flex flex-col gap-6 ">
                <div className="container mx-auto lg:px-4 md:px-8">
                    <h1 className="lg:text-2xl md:text-xl text-lg font-bold text-gray-700 lg:mb-3 lg:mt-8 md:mt-3 md:mb-1 lg:px-40 md:px-5 px-2">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>
                <div className="bg-bmsgray-50 lg:py-8 ">
                    <div className="container mx-auto lg:px-32 flex flex-col  ">
                        <div className="  lg:pb-6  md:h-64 lg:h-28  ">
                            <div><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="premier" className="w-full h-full hidden lg:block" />
                                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-480:w-600/premieres-v6-collection-202104050255.png"
                                    alt="premier" className="w-full h-full lg:hidden" />
                            </div>
                        </div>
                        <div className="md:pt-3 lg:pt-0 pt-3">
                            <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand new releases every Friday" main isDark />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={topRatedMovies}
                        title="Online Streaming Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={upcomingMovies}
                        title="Outdoor Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={topRatedMovies}
                        title="Laughter Therapy"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1 ">
                    <PosterSlider images={upcomingMovies}
                        title="Popular Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={topRatedMovies}
                        title="The Latest Plays"
                        isDark={false} />
                </div>

            </div>
        </>
    )
};

export default HomePage