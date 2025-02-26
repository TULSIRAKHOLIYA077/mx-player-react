
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import ConfirmationBox from "./ConfirmationBox";
import { useEffect, useState } from "react";

const MyList = () => {
  const allMovieList = useSelector((store) => store.myList.movies);
  const [confirm, setconfirm] = useState(false);

  const clearList = () => {
    setconfirm(true);
  };

  useEffect(()=>{
    if(allMovieList.length === 0){
      setconfirm(false);
    }  
  },[allMovieList])

  return (
    <div className="bg-[#121212ea] relative w-[100%] min-h-[100vh]">
      <div className="relative pt-36 sm:pt-32 md:pt-16 md:px-16 text-white flex flex-col items-center ">
        <div className="">
          <button
            className="bg-[#434242] flex items-center mt-10 sm:mt-0 py-2 px-3 gap-1 text-xl font-bold rounded-lg cursor-pointer"
            onClick={clearList}
          >
            Clear List
          </button>
        </div>
        {confirm && <ConfirmationBox setconfirm={setconfirm}/>}
        <div className="mt-10 flex gap-x-4 gap-y-7 justify-center flex-wrap">
          {allMovieList.map((movie) => (
            <MovieCard
              key={movie.id}
              imgUrl={movie.imageInfo[2].url}
              movie={movie}
              isInMyList={true} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
