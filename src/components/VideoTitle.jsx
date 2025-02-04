import { ANDROID_IMG } from "../utils/constants";
import { BG_URL } from "../utils/constants";
import { FaPlay } from "react-icons/fa6";


const VideoTitle = ({ language, genres, description, rating, titleImage }) => {
  return (
    <div className="absolute z-10 bg-black bg-opacity-30 w-[100%] h-[100vh] p-[5%] text-white">
      <p className="bg-[#0A0F26] font-bold w-fit border-l-2 border-l-[#097DFF] p-2">Rating {rating}</p>
      <div className="flex items-center justify-end gap-2">
        <p>Watch Amazon MX Player on</p>
        <img className="w-[5%] h-[3%]" src={ANDROID_IMG + "android.png"} alt="androidImg" />
        <img className="w-[2%]" src={ANDROID_IMG + "fire-tv.png"} alt="fire-tvImg" />
        <img className="w-[5%] h-[3%]" src={ANDROID_IMG + "samsung.png"} alt="samsungImg" />
        <img className="w-[2%]" src={ANDROID_IMG + "lg.png"} alt="lgImg" />
        <img className="w-[4%] mb-1" src={ANDROID_IMG + "cloud-tv.png"} alt="cloud-tvImg" />
      </div>

      <div className="mt-5">
        {/* Render the title image */}
        <img src={BG_URL + titleImage} alt="movieName" />
        <p className="mt-4 text-[#D3AE74] font-semibold">{language} | {genres.join(", ")}</p>
        <p className="w-[40%] font-semibold overflow-hidden h-[70px]">{description}</p>
        <div className="flex mt-6 gap-4">
          <button className="bg-[#026FCE] flex items-center py-2 px-3 gap-1 text-xl font-bold rounded-lg">
            <FaPlay /> Play
          </button>
          <button className="bg-[#434242] flex items-center py-2 px-3 gap-1 text-xl font-bold rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
