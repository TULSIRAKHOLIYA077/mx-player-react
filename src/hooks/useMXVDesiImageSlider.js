
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMXVDesiMainImageData } from "../utils/mainImageDataSlice";

const useMXVDesiImageSlider = (allImages, allImagesData) => {
  const dispatch = useDispatch();
  
  const [mainImage, setMainImage] = useState(null); 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (allImages.length > 0 && !mainImage) {
      setMainImage(allImages[0]);
      dispatch(addMXVDesiMainImageData(allImagesData[0]));
    }
  }, [allImages, mainImage, allImagesData]); 

  const nextImage = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      const updatedIndex = newIndex < allImages.length ? newIndex : allImages.length - 1; 
      setMainImage(allImages[updatedIndex]);
      dispatch(addMXVDesiMainImageData(allImagesData[updatedIndex]));
      return updatedIndex;
    });
  };

  const previousImage = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      const updatedIndex = newIndex >= 0 ? newIndex : 0; 
      setMainImage(allImages[updatedIndex]);
      dispatch(addMXVDesiMainImageData(allImagesData[updatedIndex]));
      return updatedIndex;
    });
  };

  return {
    mainImage,
    nextImage,
    previousImage,
  };
};

export default useMXVDesiImageSlider;
