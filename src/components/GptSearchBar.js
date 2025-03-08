import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS, GEMINI_API } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
const { GoogleGenerativeAI } = require("@google/generative-ai");


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GEMINI_API);
 
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async ()=>{
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log(searchText.current.value);

    
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // //Make an  API call to GPT Open AI and get Movie Results  
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const result = await model.generateContent(gptQuery);
    console.log(result);
    console.log(result.response.text());
    const gptMovies = result.response.text().split(",");  

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );


  }

  return (
    <div className='pt-[35%] md:pt-[10%] flex flex-col items-center'>
    <h1 className='text-white text-2xl md:text-3xl font-bold mb-4'>Unlimited movies, TV shows and more</h1>
    <form className='p-6 w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
      <input type='text'
        ref={searchText}
        className="p-4 m-4 mr-0 col-span-9 bg-opacity-85 bg-white-50 text-black rounded-l shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button 
        className="col-span-3 m-4 ml-0 py-2 px-4 bg-red-700 text-white rounded-r hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-700" 
        onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar;