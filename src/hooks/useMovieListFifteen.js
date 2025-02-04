import { useEffect } from "react";
import { HOMEPAGE_DATA5 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListEightteen, addmovieListFifteen, addmovieListSeventeen, addmovieListSixteen} from "../utils/moviesSlice";

const useMovieListFifteen = ()=> {
  const dispatch = useDispatch();
    const MovieListFifteen = async ()=> {
      const data = await fetch(HOMEPAGE_DATA5);
  
      const json = await data.json();
  
      dispatch(addmovieListFifteen({movieListFifteen:json.sections[0].items, movieListFifteenTitle:json.sections[0].name}));

      dispatch(addmovieListSixteen({movieListSixteen:json.sections[1].items, movieListSixteenTitle:json.sections[1].name}));

      dispatch(addmovieListSeventeen({movieListSeventeen:json.sections[2].items, movieListSeventeenTitle:json.sections[2].name}));

      dispatch(addmovieListEightteen({movieListEightteen:json.sections[3].items, movieListEightteenTitle:json.sections[3].name}));
  
    }
  
    useEffect(()=>{
      MovieListFifteen();
    },[]);

}

export default useMovieListFifteen;