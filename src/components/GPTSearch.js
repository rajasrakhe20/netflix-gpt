import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      
      <div className="bg-black">
        <GptSearchBar/>
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;