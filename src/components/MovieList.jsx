import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
  const defaultImg = "pic/d1924002234d9096126aaee2ff997632/en/2x3/320x480/test_pic1741593568781_badged_1741593572274.webp";
  return(
    <div className="mt-8">
      <h1 className="text-[#AAAAAA] font-bold text-xl md:text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin mt-5">
        <div className="flex gap-2">
          {/* {movies.map((movie)=><MovieCard key={movie.id} imgUrl={imageUrl} movie={movie}/>)} */}
          {movies.map((movie) => {
            const imageInfo = movie?.imageInfo;
            const imageUrl =
              imageInfo?.[2]?.height === 480 ? imageInfo[2].url : imageInfo?.[4]?.url;
            return (
              <MovieCard
                key={movie.id}
                imgUrl={imageUrl || defaultImg}
                movie={movie}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieList;