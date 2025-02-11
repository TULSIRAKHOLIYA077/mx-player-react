import { useEffect } from "react";
import { TRAILERPAGE_DATA2} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListTwo} from "../utils/trailerSlice";

const useTrailerMListTwo = ()=> {
  const dispatch = useDispatch();
    const trailerListTwo = async ()=> {
      const data = await fetch(TRAILERPAGE_DATA2);
  
      const json = await data.json();
      
      dispatch(addmovieListTwo(json.items));
  
    }
  
    useEffect(()=>{
      trailerListTwo();
    },[]);

}

export default useTrailerMListTwo;