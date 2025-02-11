import { BG_URL } from "../utils/constants";

const TrailerCard = ({imgUrl,title,genres})=> {
  return (
    <div className="w-[19%]">
      <div className="relative group overflow-hidden">
        <div className="absolute z-10 w-[100%] h-[100%] bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"></div>
        <img className="rounded-md transform group-hover:scale-110 transition-transform duration-300"  src={BG_URL + imgUrl} alt="movie-card" />
      </div>
      <div className="bg-[#191F27] rounded-b-md p-3 py-5 overflow-hidden">
        <h2 className="text-[#CCCCCC] font-bold text-lg truncate ">{title}</h2>
        <p className="text-[#CCCCCC] text-xs mt-1">{genres.join(",")}</p>
      </div>
    </div>
  )
}
export default TrailerCard;