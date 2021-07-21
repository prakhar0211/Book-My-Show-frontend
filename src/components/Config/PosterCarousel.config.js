const settings = {
    infinite: false,
    // dots: true,
    autoplay: false,
    slidesToShow: 5,
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
                slidesToShow: 5,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                // className: "center",
                // infinite: true,
                // centerPadding: "60px",
                slidesToShow: 2,
                swipeToSlide: true,
                arrows: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default settings;