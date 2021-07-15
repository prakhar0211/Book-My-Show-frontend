import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/Hero Corousel/HeroCarousel.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar/>
            <HeroCarousel/>
            {props.children}
        </>
    );
};

export default DefaultLayout;