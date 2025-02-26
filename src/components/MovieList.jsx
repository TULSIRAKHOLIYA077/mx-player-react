import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
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
                imgUrl={imageUrl}
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