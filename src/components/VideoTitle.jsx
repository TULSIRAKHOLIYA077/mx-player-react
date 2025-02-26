
import { ANDROID_IMG } from "../utils/constants";
import { BG_URL } from "../utils/constants";
import { FaPlay } from "react-icons/fa6";


const VideoTitle = ({ language, genres, description, rating, titleImage }) => {
  return (
    <div className="absolute z-10 bg-black bg-opacity-30 w-[100%] h-[100vh] pt-[20%] px-5 md:pt-[7%] md:px-[5%] text-white">
      <p className="bg-[#0A0F26] font-bold w-fit border-l-2 border-l-[#097DFF] p-2 hidden sm:block">Rating {rating}</p>
      <div className="hidden sm:flex items-center justify-center sm:justify-end gap-2 pt-6 sm:pt-0 ">
        <p className="text-xs md:text-base sm:font-semibold">Watch Amazon MX Player on</p>
        <img className="w-[10%] h-[6%] lg:w-[7%] lg:h-[4%]" src={ANDROID_IMG + "android.png"} alt="androidImg" />

        <img className="w-[4%]  mt-1 lg:w-[3%]" src={ANDROID_IMG + "fire-tv.png"} alt="fire-tvImg" />

        <img className="w-[8%] h-[6%] lg:w-[5%] lg:h-[4%]  mt-1" src={ANDROID_IMG + "samsung.png"} alt="samsungImg" />

        <img className="w-[4%] lg:w-[2%] mt-1" src={ANDROID_IMG + "lg.png"} alt="lgImg" />

        <img className="w-[5%] md:w-[6%] lg:w-[5%] md:mb-1" src={ANDROID_IMG + "cloud-tv.png"} alt="cloud-tvImg" />
      </div>

      <div className="absolute bottom-32 sm:mt-5 sm:mb-0">
        {/* Render the title image */}
        <img className="w-[50%] md:w-[40%] lg:max-w-[35%]" src={BG_URL + titleImage} alt="movieName" />
        <p className="mt-4 text-[#D3AE74] font-semibold">{language} | {genres.join(", ")}</p>
        <p className="w-[40%] font-semibold overflow-hidden h-[70px] hidden sm:block">{description}</p>
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

