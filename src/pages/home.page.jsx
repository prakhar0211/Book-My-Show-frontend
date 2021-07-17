import React from "react";

// components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-2xl font-bold text-gray-700 my-3 px-10">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
        </>
    )
};

export default HomePage