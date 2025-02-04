import { useEffect } from "react";
import { HOMEPAGE_DATA1 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListOne, addmovieListTwo } from "../utils/moviesSlice";
// import { addMainImage } from "../utils/mainImageSlice";

const useMovieListOne = ()=> {
  const dispatch = useDispatch();
    const MovieListOne = async ()=> {
      const data = await fetch(HOMEPAGE_DATA1);
  
      const json = await data.json();
      
      dispatch(addmovieListOne({movieListOne:json.sections[0].items, movieListOneTitle: json.sections[0].name}));
      // dispatch(addMainImage({mainImage1:json.sections[0].items[0].titleContentImageInfo[0].url}));

      dispatch(addmovieListTwo({movieListTwo:json.sections[1].items, movieListTwoTitle:json.sections[1].name}));

  
    }
  
    useEffect(()=>{
      MovieListOne();
    },[]);

}

export default useMovieListOne;