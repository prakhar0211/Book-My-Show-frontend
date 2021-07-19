import React from 'react'
import Slider from 'react-slick';

// components
import Poster from '../poster/poster.component';

// config
import PosterCarouselSettings from '../Config/PosterCarousel.config';
import PremierImages from '../Config/tempPoster.config';




export const Premier = () => {
    

    // const PremierImages = [
        
    //     {
    //         src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/wonder-woman-1984-et00077622-22-02-2021-07-00-29.jpg",
    //         alt: "xsadf",
    //         title: "suyga",
    //         subtitle: "english",
    //     },
    // ]
    return (
        <>
            <div className="flex flex-col items-start">
                <h3 className="text-white text-2xl font-bold">Premieres</h3>
                <p className="text-white text-md">Brand new releases every Friday</p>
            </div>
            <Slider {...PosterCarouselSettings}>
                {PremierImages.map((image) => <Poster{...image} isDark />)}
            </Slider>
        </>
    )
};

export default Premier;