import React from 'react'
import Slider from 'react-slick';

// components
import Poster from '../poster/poster.component';

// config
import PosterCarouselSettings from '../Config/PosterCarousel.config';

const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col items-start mb-2">
                <h3 className={`text-2xl font-bold 
                ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
                <p className={` text-md 
                ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {props.images.map((image) => <Poster{...image} isDark={props.isDark} />)}
            </Slider>
        </>
    )
}

export default PosterSlider;