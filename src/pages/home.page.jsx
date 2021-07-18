import React from "react";

// components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/premier/premier.component";


const HomePage = () => {
    return (
        <>
        <div className="flex flex-col gap-16">
        <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-2xl font-bold text-gray-700 my-3 px-10">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>
            <div className="bg-bmsgray-50 py-14 ">
                <div className="container mx-auto px-32 flex flex-col">
                    <div className="hidden md:flex  ">
                        <div><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="premier" className="w-full h-full" /></div>
                    </div>
                    <Premier />
                </div>
            </div>

        </div>
        </>
    )
};

export default HomePage