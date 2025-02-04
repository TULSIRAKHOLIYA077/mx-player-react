import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieListOne from "../hooks/useMovieListOne";
import useMovieListThree from "../hooks/usemovieListThree";
import useMovieListSeven from "../hooks/useMovieListSeven";
import useMovieListEleven from "../hooks/useMovieListEleven";
import useMovieListFifteen from "../hooks/useMovieListFifteen";


const Browse = () => {
  useMovieListOne();
  useMovieListThree();
  useMovieListSeven();
  useMovieListEleven();
  useMovieListFifteen();

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;