import useAllMoviesMListOne from "../hooks/useAllMoviesMListOne";
import useAllMoviesMListThree from "../hooks/useAllMoviesMListThree";
import AllMoviesMainContainer from "./AllMoviesMainContainer";
import AllMoviesSecondaryContainer from "./AllMoviesSecondaryContainer";

const AllMovies = ()=>{
  useAllMoviesMListOne();
  useAllMoviesMListThree();

  return(
    <div>
      <AllMoviesMainContainer/>
      <AllMoviesSecondaryContainer/>
    </div>
  )
}

export default AllMovies;