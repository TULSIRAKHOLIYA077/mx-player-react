import useShowsMListOne from "../hooks/useShowsMListOne";
import useShowsMListThree from "../hooks/useShowsMListThree";
import ShowsMainContainer from "./ShowsMainContainer";
import ShowsSecondaryContainer from "./ShowsSecondaryContainer";

const Shows = ()=>{
  useShowsMListOne();
  useShowsMListThree();

  return(
    <div>
      <ShowsMainContainer/>
      <ShowsSecondaryContainer/>
    </div>
  )
}

export default Shows;