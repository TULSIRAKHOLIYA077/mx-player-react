import { useEffect } from "react";
import { NEWHOTPAGE_DATA2} from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addmovieListFour, addmovieListThree } from "../utils/newHotSlice";

const useNewHotMListThree = ()=> {
  const dispatch = useDispatch();
    const newHotListThree = async ()=> {
      const data = await fetch(NEWHOTPAGE_DATA2);
  
      const json = await data.json();
      
      dispatch(addmovieListThree({movieListThree:json.sections[0].items, movieListThreeTitle:json.sections[0].name}));

      dispatch(addmovieListFour({movieListFour:json.sections[1].items, movieListFourTitle:json.sections[1].name}));
}
  
    useEffect(()=>{
      newHotListThree();
    },[]);

}

export default useNewHotMListThree;