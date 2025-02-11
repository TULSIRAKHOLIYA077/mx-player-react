import { useEffect } from "react";
import { TRAILERPAGE_DATA1 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListOne } from "../utils/trailerSlice";

const useTrailerMListOne = ()=> {
  const dispatch = useDispatch();
    const trailerListOne = async ()=> {
      const data = await fetch(TRAILERPAGE_DATA1);
  
      const json = await data.json();
      
      dispatch(addmovieListOne(json.sections[0].items));
  
    }
  
    useEffect(()=>{
      trailerListOne();
    },[]);

}

export default useTrailerMListOne;