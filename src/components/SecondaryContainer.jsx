import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const allMovieList = useSelector((store)=> store.movies);

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
        {       
          !allMovieList.movieListSeven ? 'Loading' : (<MovieList title={allMovieList.movieListSevenTitle} movies={allMovieList.movieListSeven}/>)
        }
        {       
          !allMovieList.movieListEight ? 'Loading' : (<MovieList title={allMovieList.movieListEightTitle} movies={allMovieList.movieListEight}/>)
        }
        {       
          !allMovieList.movieListNine ? 'Loading' : (<MovieList title={allMovieList.movieListNineTitle} movies={allMovieList.movieListNine}/>)
        }
        {       
          !allMovieList.movieListTen ? 'Loading' : (<MovieList title={allMovieList.movieListTenTitle} movies={allMovieList.movieListTen}/>)
        }
        {       
          !allMovieList.movieListEleven ? 'Loading' : (<MovieList title={allMovieList.movieListElevenTitle} movies={allMovieList.movieListEleven}/>)
        }
        {       
          !allMovieList.movieListTwelve ? 'Loading' : (<MovieList title={allMovieList.movieListTwelveTitle} movies={allMovieList.movieListTwelve}/>)
        }
        {       
          !allMovieList.movieListThirteen ? 'Loading' : (<MovieList title={allMovieList.movieListThirteenTitle} movies={allMovieList.movieListThirteen}/>)
        }
        {       
          !allMovieList.movieListFourteen ? 'Loading' : (<MovieList title={allMovieList.movieListFourteenTitle} movies={allMovieList.movieListFourteen}/>)
        }
        {       
          !allMovieList.movieListFifteen ? 'Loading' : (<MovieList title={allMovieList.movieListFifteenTitle} movies={allMovieList.movieListFifteen}/>)
        }
        {       
          !allMovieList.movieListSixteen ? 'Loading' : (<MovieList title={allMovieList.movieListSixteenTitle} movies={allMovieList.movieListSixteen}/>)
        }
        {       
          !allMovieList.movieListSeventeen || allMovieList.movieListSeventeenTitle ? 'Loading' : (
            <MovieList title={allMovieList.movieListSeventeenTitle} movies={allMovieList.movieListSeventeen} />
          )
        }
        {       
          !allMovieList.movieListEightteen ? 'Loading' : (
            <MovieList title={allMovieList.movieListEightteenTitle} movies={allMovieList.movieListEightteen} />
          )
        }

      </div>
    </div>
  )
}

export default SecondaryContainer;