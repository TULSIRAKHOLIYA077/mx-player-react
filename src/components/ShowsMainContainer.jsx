
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useShowsImageSlider from "../hooks/useShowsImageSlider";

const ShowsMainContainer = () => {
  const imageData = useSelector((store) => store.mainImageData?.showsMainImageData);

  const [language, setLanguage] = useState(null);
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(null);
  const [titleImage, setTitleImage] = useState(null);

  const mainImage1 = useSelector((store) => store.shows.movieListOne?.[7]?.titleContentImageInfo?.[0]?.url);
  const mainImage1Data = useSelector((store) => store.shows.movieListOne?.[7]);

  const mainImage2 = useSelector((store) => store.shows.movieListTwo?.[7]?.titleContentImageInfo?.[0]?.url);
  const mainImage2Data = useSelector((store) => store.shows.movieListTwo?.[7]);

  const mainImage3 = useSelector((store) => store.shows.movieListThree?.[7]?.titleContentImageInfo?.[0]?.url);
  const mainImage3Data = useSelector((store) => store.shows.movieListThree?.[7]);

  const mainImage4 = useSelector((store) => store.shows.movieListFour?.[7]?.titleContentImageInfo?.[0]?.url);
  const mainImage4Data = useSelector((store) => store.shows.movieListFour?.[7]);

  const mainImage5 = useSelector((store) => store.shows.movieListFive?.[7]?.titleContentImageInfo?.[0]?.url);
  const mainImage5Data = useSelector((store) => store.shows.movieListFive?.[7]);

  const allImages = [mainImage1, mainImage2, mainImage3, mainImage4, mainImage5];
  const allImagesData = [mainImage1Data, mainImage2Data, mainImage3Data, mainImage4Data, mainImage5Data];

  useEffect(() => {
    if (!imageData) {
      setLanguage("Loading...");
      setGenres([]);
      setDescription("Loading...");
      setRating("Loading...");
      setTitleImage("Loading...");
    } else {
      setLanguage(imageData.languages?.[0]);
      setGenres(imageData?.genres);
      setDescription(imageData?.description);
      setRating(imageData?.rating);   
      setTitleImage(imageData?.titleContentImageInfo?.[1]?.url);   
    }
  }, [imageData]);

  const { mainImage, nextImage, previousImage } = useShowsImageSlider(allImages, allImagesData);

  return (
    <div className="relative">
      <VideoTitle
        language={language}
        genres={genres}
        description={description}
        rating={rating}
        titleImage={titleImage}
      />
      
      <VideoBackground
        mainImage={mainImage}
        nextImage={nextImage}
        previousImage={previousImage}
      />
    </div>
  );
};

export default ShowsMainContainer;
