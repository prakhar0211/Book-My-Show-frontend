import React from "react";

// components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
// import Premier from "../components/premier/premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


// config
import TempPosters from "../components/Config/tempPoster.config";

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
                        <PosterSlider images={TempPosters} title="Premieres" subtitle="Brand new releases every Friday" isDark />
                    </div>
                </div>
                <div className="container mx-auto px-36">
                    <PosterSlider images={TempPosters}
                        title="Online Streaming Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto px-36">
                    <PosterSlider images={TempPosters}
                        title="Outdoor Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto px-36">
                    <PosterSlider images={TempPosters}
                        title="Outdoor Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto px-36">
                    <PosterSlider images={TempPosters}
                        title="Laughter Therapy"
                        isDark={false} />
                </div>

                <div className="container mx-auto px-36">
                    <PosterSlider images={TempPosters}
                        title="Popular Events"
                        isDark={false} />
                </div>


            </div>
        </>
    )
};

export default HomePage