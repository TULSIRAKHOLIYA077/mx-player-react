import useTrailerMListOne from "../hooks/useTrailerMListOne";
import useTrailerMListTwo from "../hooks/useTrailerMListTwo";
import TrailerContainer from "./TrailerContainer";

const Trailer = ()=> {
  useTrailerMListOne();
  useTrailerMListTwo();

  return (
    <div>
      <TrailerContainer/>
    </div>
  )
}

export default Trailer;