import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies);

  return (
   movies.nowPlayingMovies &&  (
   <div className='bg-black w-screen'>
    <div className='-mt-80 pl-12 relative z-20'>
      {/* MovieList - popularMovies
      MovieList- Trending
      MovielIst  - Now Playing 
      Multiple Componenets
      Each List will have cards horizontal cards*/}
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Top Rated Movies"} movies={movies.topratedMovies}/>
       <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>  
       <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      </div>

    </div>
   )
   
  )
}

export default SecondaryContainer;