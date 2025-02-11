import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MXVDesiSecondaryContainer = () => {
  const allMovieList = useSelector((store)=> store.mxVDesi);

  return allMovieList.movieListOne && (
    <div className="px-[5%] bg-[#121212]">
      <div className="relative z-40 -mt-28">
        <MovieList title={allMovieList.movieListOneTitle} movies={allMovieList.movieListOne}/>

        {
          !allMovieList.movieListTwo ? 'Loading' : (<MovieList title={allMovieList.movieListTwoTitle} movies={allMovieList.movieListTwo}/>)
        }
        {      
          !allMovieList.movieListThree ? 'Loading' : (<MovieList title={allMovieList.movieListThreeTitle} movies={allMovieList.movieListThree}/>)
        }
        {       
          !allMovieList.movieListFour ? 'Loading' : (<MovieList title={allMovieList.movieListFourTitle} movies={allMovieList.movieListFour}/>)
        }
        {       
          !allMovieList.movieListFive ? 'Loading' : (<MovieList title={allMovieList.movieListFiveTitle} movies={allMovieList.movieListFive}/>)
        }
        {       
          !allMovieList.movieListSix ? 'Loading' : (<MovieList title={allMovieList.movieListSixTitle} movies={allMovieList.movieListSix}/>)
        }
      </div>
    </div>
  )
}

export default MXVDesiSecondaryContainer;