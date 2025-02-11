import { useEffect } from "react";
import { MXVDESIPAGE_DATA1 } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieListOne, addmovieListTwo } from "../utils/mxVDesiSlice";

const useMXVDesiMListOne = ()=> {
  const dispatch = useDispatch();
    const mxVDesiListOne = async ()=> {
      const data = await fetch(MXVDESIPAGE_DATA1);
  
      const json = await data.json();
      
      dispatch(addmovieListOne({movieListOne:json.sections[0].items, movieListOneTitle: json.sections[0].name}));

      dispatch(addmovieListTwo({movieListTwo:json.sections[1].items, movieListTwoTitle:json.sections[1].name}));

  
    }
  
    useEffect(()=>{
      mxVDesiListOne();
    },[]);

}

export default useMXVDesiMListOne;