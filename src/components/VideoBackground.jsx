import { BG_URL } from "../utils/constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const VideoBackground = ({ mainImage, nextImage, previousImage }) => {
  return (
    <div>
      {mainImage && <img className="w-[100vw] h-[100vh]" src={BG_URL + mainImage} alt="MainImage" />}
      
      <div className="flex gap-3 absolute z-10 text-white bottom-32 right-5 sm:right-20">
        <div className="bg-[#616161] rounded-md p-2">
          <FaChevronLeft className="text-2xl cursor-pointer" onClick={previousImage} />
        </div>
        <div className="bg-[#616161] rounded-md p-2">
          <FaChevronRight className="text-2xl cursor-pointer" onClick={nextImage} />
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
