import React from 'react'

// Components
import MovieNavbar from '../components/Navbar/MovieNavbar.component';

export const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar/>
            {props.children}
            
        </>

    )
}

export default MovieLayout;
