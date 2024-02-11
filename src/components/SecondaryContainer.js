import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store=>store.movies);

  return (
   movies.nowPlayingMovies &&  (
   <div className='bg-black'>
    <div className='-mt-52 pl-12 relative z-20'>
      {/* MovieList - popularMovies
      MovieList- Trending
      MovielIst  - Now Playing 
      Multiple Componenets
      Each List will have cards horizontal cards*/}
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>

    </div>
   )
   
  )
}

export default SecondaryContainer;