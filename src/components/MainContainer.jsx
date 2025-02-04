import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const imageData = useSelector((store) => store.mainImageData?.mainImageData);

  const [language, setLanguage] = useState(null);
  const [genres, setGenres] = useState([]);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(null);
  const [titleImage, setTitleImage] = useState(null);

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

  return (
    <div className="relative">
      {/* Pass data as props to VideoTitle */}
      <VideoTitle
        language={language}
        genres={genres}
        description={description}
        rating={rating}
        titleImage={titleImage}
      />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
