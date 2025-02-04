import { BG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { addMainImageData } from "../utils/mainImageDataSlice";

const VideoBackground = () => {
  const dispatch = useDispatch();
  // Redux selectors to get the images
  const mainImage1 = useSelector((store) => store.movies.movieListOne?.[0]?.titleContentImageInfo?.[0]?.url);
  const mainImage1Data = useSelector((store) => store.movies.movieListOne?.[0]);

  const mainImage2 = useSelector((store) => store.movies.movieListThree?.[0]?.titleContentImageInfo?.[0]?.url);
  const mainImage2Data = useSelector((store) => store.movies.movieListThree?.[0]);

  const mainImage3 = useSelector((store) => store.movies.movieListSeven?.[0]?.titleContentImageInfo?.[0]?.url);
  const mainImage3Data = useSelector((store) => store.movies.movieListSeven?.[0]);

  const mainImage4 = useSelector((store) => store.movies.movieListEleven?.[0]?.titleContentImageInfo?.[0]?.url);
  const mainImage4Data = useSelector((store) => store.movies.movieListEleven?.[0]);

  const mainImage5 = useSelector((store) => store.movies.movieListFifteen?.[0]?.titleContentImageInfo?.[0]?.url);
  const mainImage5Data = useSelector((store) => store.movies.movieListFifteen?.[0]);

  // All images in an array
  const allImages = [mainImage1, mainImage2, mainImage3, mainImage4, mainImage5];

  const allImagesData = [mainImage1Data, mainImage2Data, mainImage3Data, mainImage4Data, mainImage5Data];

  // State to track the main image and index
  const [mainImage, setMainImage] = useState(null); 
  const [index, setIndex] = useState(0);

  // Effect to set the first image after Redux store has the data
  useEffect(() => {
    // Check if any image is available, then set the first image as the mainImage
    if (allImages.length > 0 && !mainImage) {
      setMainImage(allImages[0]);
      dispatch(addMainImageData(allImagesData[0]));
    }
  }, [allImages, mainImage,allImagesData]); // Runs when allImages or mainImage changes


  // Function to go to the next image
  const nextImage = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      const updatedIndex = newIndex < allImages.length ? newIndex : allImages.length - 1; 
      setMainImage(allImages[updatedIndex]);
      dispatch(addMainImageData(allImagesData[updatedIndex]));
      return updatedIndex;
    });
  };

  // Function to go to the previous image
  const previousImage = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      const updatedIndex = newIndex >= 0 ? newIndex : 0; 
      setMainImage(allImages[updatedIndex]);
      dispatch(addMainImageData(allImagesData[updatedIndex]));
      return updatedIndex;
    });
  };

  return (
    <div>
      {mainImage && <img className="w-[100vw] h-[100vh]" src={BG_URL + mainImage} alt="MainImage" />}
      
      <div className="flex gap-3 absolute z-10 text-white bottom-32 right-20">
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
