import { useEffect } from "react";
import { HOMEPAGE_DATA4 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListEleven, addmovieListFourteen, addmovieListThirteen, addmovieListTwelve } from "../utils/moviesSlice";

const useMovieListEleven = ()=> {
  const dispatch = useDispatch();
    const MovieListEleven = async ()=> {
      const data = await fetch(HOMEPAGE_DATA4);
  
      const json = await data.json();
  
      dispatch(addmovieListEleven({movieListEleven:json.sections[0].items, movieListElevenTitle:json.sections[0].name}));

      dispatch(addmovieListTwelve({movieListTwelve:json.sections[1].items, movieListTwelveTitle:json.sections[1].name}));

      dispatch(addmovieListThirteen({movieListThirteen:json.sections[2].items, movieListThirteenTitle:json.sections[2].name}));

      dispatch(addmovieListFourteen({movieListFourteen:json.sections[3].items, movieListFourteenTitle:json.sections[3].name}));
  
    }
  
    useEffect(()=>{
      MovieListEleven();
    },[]);

}

export default useMovieListEleven;