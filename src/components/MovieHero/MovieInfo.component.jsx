import React, { useContext, useState } from 'react'

// components
import PaymentModal from '../PaymentModal/Payment.component';

// context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const { movie } = useContext(MovieContext);

    // optional chaining
    const genres =
        // movie.genres && movie.genres.map(({name}) => name).join(", ");
        // this will create an array of all genres and will and ", " between all elements and return an array
        // to simplify this
        movie.genres?.map(({ name }) => name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies = () => {
        setIsOpen(true);
        setPrice(549);
    };

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3">
                <div className="flex items-center lg:gap-3 gap-2 md:pl-5 lg:pl-0 pl-4 ">
                    <div className="w-24 h-5 ">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premiere"
                            className="w-full h-full" />
                    </div>
                    <span className="hidden lg:block bg-transparent p-1 text-white text-xs rounded-lg">Streaming Now</span>
                    <span className="bg-bmsgray-700 lg:hidden px-2 text-white text-xs rounded-lg">Streaming Now</span>
                </div>
                <h1 className="hidden lg:block text-white text-4xl font-bold">{movie.original_title}</h1>
                <div className="flex flex-col-reverse lg:flex-col gap-5 lg:gap-8">
                    <div className="text-white font-light flex flex-col lg:gap-4 gap-3 lg:pl-0 md:pl-5 pl-5">
                        <h4 className="text-xs">4k &bull; {movie.original_language} &bull; ACTION</h4>
                        <h4 className="text-xs">{(movie.runtime / 60).toFixed(2)}h &bull; {genres} &bull; 16+</h4>
                    </div>
                    <div className="flex items-center gap-4 md:w-screen w-screen md:px-4  px-4 lg:w-full ">
                        <button onClick={rentMovies} className="bg-bcolor-300 w-full py-3 text-white font-semibold rounded-lg">Rent ₹149</button>
                        <button onClick={buyMovies} className="bg-bcolor-300 w-full py-3 text-white font-semibold rounded-lg">Buy ₹549</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieInfo;
