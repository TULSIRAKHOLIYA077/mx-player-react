import TrailerCard from "./TrailerCard";

const TrailerList = ({movies}) => {
  return(
    <div className="">
      <div className="">
        <div className="flex justify-center flex-wrap gap-x-3 gap-y-8 mb-7 mt-7">
          {movies.map((movie)=><TrailerCard key={movie.id} imgUrl={movie.imageInfo[1].url} title={movie.title} genres={movie.genres}/>)}
        </div>
      </div>
    </div>
  )
}

export default TrailerList;