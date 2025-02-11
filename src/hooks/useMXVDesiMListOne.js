import { useEffect } from "react";
import { ALLMOVIESPAGE_DATA1 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListOne, addmovieListTwo } from "../utils/showsSlice";

const useAllMoviesMListOne = ()=> {
  const dispatch = useDispatch();
    const allMoviesListOne = async ()=> {
      const data = await fetch(ALLMOVIESPAGE_DATA1);
  
      const json = await data.json();
      
      dispatch(addmovieListOne({movieListOne:json.sections[0].items, movieListOneTitle: json.sections[0].name}));

      dispatch(addmovieListTwo({movieListTwo:json.sections[1].items, movieListTwoTitle:json.sections[1].name}));

  
    }
  
    useEffect(()=>{
      allMoviesListOne();
    },[]);

}

export default useAllMoviesMListOne;