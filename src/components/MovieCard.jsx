import { FaCirclePlus } from "react-icons/fa6";
import { BG_URL } from "../utils/constants";

const MovieCard = ({imgUrl})=> {
  const plusSign = ()=>{
    console.log("plus sign");
    
  }
  return (
    <div className="w-44 relative group">
      <div className="absolute z-10 w-[100%] h-[100%] bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute z-20 top-[45%] left-[45%] opacity-0 group-hover:opacity-100 transition-opacity"><FaCirclePlus className="text-[#026FCE] text-3xl hover:cursor-pointer" onClick={plusSign}/></div>
      <img className="rounded-md"  src={BG_URL + imgUrl} alt="movie-card" />
    </div>
  )
}

export default MovieCard;