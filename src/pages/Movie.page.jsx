import React, { useContext, useState, useEffect } from 'react'
import { SiVisa } from "react-icons/si"
import { FaCcAmazonPay } from "react-icons/fa"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';



// Components
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../components/Config/tempPoster.config";

// context
import { MovieContext } from '../context/movie.context';

const Movie = () => {
    const { id } = useParams();
    const { movie } = useContext(MovieContext);
    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        }
        requestSimilarMovies();
    }, [id])

    useEffect(() => {
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        }
        requestRecommendedMovies();
    }, [id])

    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    const settings = {
        infinite: false,
        // dots: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        // leftMode: true,
        // centerPadding: "50px",
        arrows: false,
        // centerMode: true,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    // slidesToShow: 5,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // className: "center",
                    // infinite: true,
                    // centerPadding: "60px",
                    slidesToShow: 3,
                    swipeToSlide: true,
                    arrows: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settingsCast = {
        infinite: false,
        // dots: true,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        // leftMode: true,
        // centerPadding: "50px",
        arrows: false,
        // centerMode: true,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    className: "center",
                    infinite: true,
                    centerPadding: "60px",
                    // slidesToShow: 5,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // className: "center",
                    // infinite: true,
                    // centerPadding: "60px",
                    slidesToShow: 4,
                    swipeToSlide: true,
                    arrows: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <>
            <MovieHero />
            <div className="my-5 container px-4 md:px-6 lg:pl-32 lg:w-3/4">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-gray-800 font-bold text-xl lg:text-3xl">About the movie</h2>
                    <p className="lg:text-lg text-sm md:text-base">{movie.overview}
                    </p>
                </div>
            </div>
            <div className="lg:my-16 my-5 md:my-7">
                <hr />
            </div>
            <div className="my-8 px-4 lg:px-32 md:px-5 flex flex-col gap-3">
                <h2 className="font-bold text-gray-800 text-xl">Applicable offers</h2>
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="flex items-start gap-2 border-2 rounded-xl border-yellow-400 border-dashed bg-yellow-100  p-3">
                        <div className="w-10 h-10"><SiVisa className="h-full w-full" /></div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold md:text-lg">Visa Stream Offer</h3>
                            <p className="text-gray-600 md:text-sm">Get 50% off up to INR 150 on all VISA cards* on BookMyShow Stream.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 border-2 rounded-xl border-yellow-400 border-dashed bg-yellow-100  p-3">
                        <div className="w-10 h-10"><FaCcAmazonPay className="h-full w-full" /></div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold md:text-lg">Filmy Pass</h3>
                            <p className="text-gray-600 md:text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="lg:my-16 my-5 md:my-7">
                <hr />
            </div>
            <div className="my-5 container  px-4 md:px-6 lg:pl-32 lg:w-3/4">
                <div className="">
                    <h2 className="font-bold text-gray-800 text-xl pb-4">Cast & Crew</h2>
                    <Slider {...settingsCast}>
                        {cast.map((castdata) => (
                            <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                                castName={castdata.original_name}
                                role={castdata.character} />
                        ))}
                    </Slider>
                </div>
                <div className="lg:my-16 my-5 md:my-7">
                    <hr />
                </div>
                <div className="my-8">
                    <div className="container mx-auto">
                        <PosterSlider images={similarMovies}
                            config={settings}
                            title="You Might Also Like"
                            isDark={false} />
                    </div>
                </div>
                <div className="lg:mb-16 lg:mt-4 my-5 md:my-7">
                    <hr />
                </div>
                <div className="my-8">
                    <div className="container mx-auto">
                        <PosterSlider images={recommendedMovies}
                            config={settings}
                            title="BMS XCLUSIV"
                            isDark={false} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Movie;
