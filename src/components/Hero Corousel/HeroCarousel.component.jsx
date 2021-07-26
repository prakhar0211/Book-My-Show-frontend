import axios from "axios";
import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";

// component
import { NextArrow, PrevArrow } from "./arrows.component";


const HeroCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => { 
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results)

        };
        requestNowPlayingMovies();
        
    }, []);

    const settingsLG = {
        arrows: true,
        centerMode: true,
        centerPadding: "350px",
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextarrow: <NextArrow />,
        prevarrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextarrow: <NextArrow />,
        prevarrow: <PrevArrow />,

    }

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-48 md:h-96 py-3">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full " />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-80 px-1.5 py-3 ">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="rounded w-full h-full" />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    )
};

export default HeroCarousel;