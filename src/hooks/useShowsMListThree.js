import { useEffect } from "react";
import { SHOWSPAGE_DATA2 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListFive, addmovieListFour, addmovieListSix, addmovieListThree } from "../utils/showsSlice";

const useShowsMListThree = ()=> {
  const dispatch = useDispatch();
    const showsListThree = async ()=> {
      const data = await fetch(SHOWSPAGE_DATA2);
  
      const json = await data.json();
      
      dispatch(addmovieListThree({movieListThree:json.sections[0].items, movieListThreeTitle:json.sections[0].name}));

      dispatch(addmovieListFour({movieListFour:json.sections[1].items, movieListFourTitle:json.sections[1].name}));

      dispatch(addmovieListFive({movieListFive:json.sections[2].items, movieListFiveTitle:json.sections[2].name}));

      dispatch(addmovieListSix({movieListSix:json.sections[3].items, movieListSixTitle:json.sections[3].name}));

  
    }
  
    useEffect(()=>{
      showsListThree();
    },[]);

}

export default useShowsMListThree;