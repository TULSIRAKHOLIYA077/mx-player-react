
import { FaCirclePlus, FaCircleCheck } from "react-icons/fa6"; 
import { BG_URL } from "../utils/constants";
import { addMovie, removeMovie } from "../utils/myListSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

const MovieCard = ({ imgUrl, movie, isInMyList }) => {
  const dispatch = useDispatch();

  const myListMovies = useSelector((store) => store.myList.movies);

  const isAdded = myListMovies.some((m) => m.id === movie.id);

  const plusSign = () => {
    if (!isAdded) {
      dispatch(addMovie(movie));
    }
  };

  const removeFromList = () => {
    dispatch(removeMovie(movie));
  };

  return (
    <div className="w-32 sm:w-44 relative group">
      <div className="absolute z-10 w-[100%] h-[100%] bg-white bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute z-20 top-[45%] left-[45%] opacity-0 group-hover:opacity-100 transition-opacity">
        {isAdded ? (
          <FaCircleCheck className="text-green-400 text-3xl hover:cursor-pointer" />
        ) : (
          <FaCirclePlus
            className="text-[#026FCE] text-3xl hover:cursor-pointer"
            onClick={plusSign}
          />
        )}
      </div>

      {isInMyList && (
        <div
          onClick={removeFromList}
          className="absolute z-20 top-2 right-2 text-red-500 cursor-pointer"
        >
          <FaTimes className="text-2xl" />
        </div>
      )}

      <img className="rounded-md" src={BG_URL + imgUrl} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
