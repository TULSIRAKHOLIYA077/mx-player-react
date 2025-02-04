import { useEffect } from "react";
import { HOMEPAGE_DATA3 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListEight, addmovieListNine, addmovieListSeven, addmovieListTen } from "../utils/moviesSlice";

const useMovieListSeven = ()=> {
  const dispatch = useDispatch();
    const MovieListSeven = async ()=> {
      const data = await fetch(HOMEPAGE_DATA3);
  
      const json = await data.json();
  
      dispatch(addmovieListSeven({movieListSeven:json.sections[0].items, movieListSevenTitle:json.sections[0].name}));

      dispatch(addmovieListEight({movieListEight:json.sections[1].items, movieListEightTitle:json.sections[1].name}));

      dispatch(addmovieListNine({movieListNine:json.sections[2].items, movieListNineTitle:json.sections[2].name}));

      dispatch(addmovieListTen({movieListTen:json.sections[3].items, movieListTenTitle:json.sections[3].name}));
  
    }
  
    useEffect(()=>{
      MovieListSeven();
    },[]);

}

export default useMovieListSeven;