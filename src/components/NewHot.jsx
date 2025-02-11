import useNewHotMListOne from "../hooks/useNewHotMListOne";
import useNewHotMListThree from "../hooks/useNewHotMListThree";
import NewHotMainContainer from "./NewHotMainContainer";
import NewHotSecondaryContainer from "./NewHotSecondaryContainer";

const NewHot = () => {
  useNewHotMListOne();
  useNewHotMListThree();

  return (
    <div>
      <NewHotMainContainer/>
      <NewHotSecondaryContainer/>
    </div>
  )
}

export default NewHot;