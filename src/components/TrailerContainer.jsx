import TrailerList from "./TrailerList";
import { useSelector } from "react-redux";

const TrailerContainer = () => {
  const allMovieList = useSelector((store)=> store.trailer);

  return allMovieList.movieListOne && (
    <div className="py-[12%] md:py-[7%] bg-[#121212]">
      <div className="relative z-40 top-4">
        <TrailerList movies={allMovieList.movieListOne}/>

        {
          !allMovieList.movieListTwo ? 'Loading' : (<TrailerList movies={allMovieList.movieListTwo}/>)
        }
      </div>
    </div>
  )
}

export default TrailerContainer;