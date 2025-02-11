import useMXVDesiMListOne from "../hooks/useAllMoviesMListOne";
import useMXVDesiMListThree from "../hooks/useMXVDesiMListThree";
import MXVDesiMainContainer from "./MXVDesiMainContainer";
import MXVDesiSecondaryContainer from "./MXVDesiSecondaryContainer";

const Vdesi = () =>{
  useMXVDesiMListOne();
  useMXVDesiMListThree();

  return (
    <div>
      <MXVDesiMainContainer/>
      <MXVDesiSecondaryContainer/>
    </div>
  )
}

export default Vdesi;