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
            <div className="flex flex-col gap-16 ">
                <div className="container mx-auto px-4 md:px-8">
                    <h1 className="text-2xl font-bold text-gray-700 my-3 px-10">The Best of Entertainment</h1>
                    <EntertainmentCardSlider />
                </div>
                <div className="bg-bmsgray-50 lg:py-8 ">
                    <div className="container mx-auto lg:px-32 flex flex-col  ">
                        <div className="  lg:pb-6  md:h-64 lg:h-28  ">
                            <div><img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                                alt="premier" className="w-full h-full hidden lg:block" />
                                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-480:w-600/premieres-v6-collection-202104050255.png"
                                alt="premier" className="w-full h-full lg:hidden"/>
                            </div>
                        </div>
                        <div className="md:pt-3 lg:pt-0 pt-3">
                        <PosterSlider images={TempPosters} title="Premieres" subtitle="Brand new releases every Friday" main isDark />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={TempPosters}
                        title="Online Streaming Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={TempPosters}
                        title="Outdoor Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={TempPosters}
                        title="Laughter Therapy"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1 ">
                    <PosterSlider images={TempPosters}
                        title="Popular Events"
                        isDark={false} />
                </div>

                <div className="container mx-auto lg:px-36 md:px-1">
                    <PosterSlider images={TempPosters}
                        title="The Latest Plays"
                        isDark={false} />
                </div>

            </div>
        </>
    )
};

export default HomePage