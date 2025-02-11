import { useEffect } from "react";
import { NEWHOTPAGE_DATA1} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListOne, addmovieListTwo } from "../utils/newHotSlice";

const useNewHotMListOne = ()=> {
  const dispatch = useDispatch();
    const newHotListOne = async ()=> {
      const data = await fetch(NEWHOTPAGE_DATA1);
  
      const json = await data.json();
      
      dispatch(addmovieListOne({movieListOne:json.sections[0].items, movieListOneTitle: json.sections[0].name}));

      dispatch(addmovieListTwo({movieListTwo:json.sections[1].items, movieListTwoTitle:json.sections[1].name}));

  
    }
  
    useEffect(()=>{
      newHotListOne();
    },[]);

}

export default useNewHotMListOne;