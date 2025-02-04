import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
  return(
    <div className="mt-8">
      <h1 className="text-[#AAAAAA] font-bold text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin mt-5">
        <div className="flex gap-2">
          {movies.map((movie)=><MovieCard key={movie.id} imgUrl={movie.imageInfo[2].url}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;