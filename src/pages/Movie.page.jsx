import React from 'react'
import { SiVisa } from "react-icons/si"
import { FaCcAmazonPay } from "react-icons/fa"

// Components
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/Cast.component';
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config
import TempPosters from "../components/Config/tempPoster.config";

const Movie = () => {
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


    return (
        <>
            <MovieHero />
            <div className="my-5 container px-4 md:px-6 lg:pl-32 lg:w-3/4">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-gray-800 font-bold text-xl lg:text-3xl">About the movie</h2>
                    <p className="lg:text-lg text-sm md:text-base">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
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
            <div className="my-5 container px-4 md:px-6 lg:pl-32 lg:w-3/4">
                <div className="">
                    <h2 className="font-bold text-gray-800 text-xl pb-4">Cast & Crew</h2>
                    <div className="flex flex-wrap gap-5">
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman" />
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman" />
                        <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
                            castName="Gal Gadot"
                            role="Wonder Woman" />
                    </div>
                </div>
                <div className="lg:my-16 my-5 md:my-7">
                    <hr />
                </div>
                <div className="my-8">
                    <div className="container mx-auto">
                        <PosterSlider images={TempPosters}
                            config={settings}
                            title="You Might Also Like"
                            isDark={false} />
                    </div>
                </div>
                <div className="lg:my-16 my-5 md:my-7">
                    <hr />
                </div>
                <div className="my-8">
                    <div className="container mx-auto">
                        <PosterSlider images={TempPosters}
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
