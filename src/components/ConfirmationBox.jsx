import { useDispatch } from "react-redux";
import { clearMyList } from "../utils/myListSlice";

const ConfirmationBox = ({setconfirm})=> {
  const dispatch = useDispatch();
  const confirmBtn = ()=>{
      dispatch(clearMyList());
  }
  const cancelBtn = () => {
    setconfirm(false);  
  };

  return (
    <div className="text-white bg-black bg-opacity-75 p-8 rounded-lg flex flex-col items-center sm:w-3/12 absolute z-30 top-[30%] sm:top-[50%]">
      <p className="text-2xl font-bold">Are you sure?</p> 
      <div className="flex gap-2 mt-4">
        <button className="flex items-center py-1 px-2 gap-1 text-lg font-bold rounded-lg cursor-pointer border-white border-2 bg-red-500" onClick={cancelBtn}>Cancle</button>
        <button className="flex items-center py-1 px-2 gap-1 text-lg font-bold rounded-lg cursor-pointer border-white border-2 bg-[#0079FF]" onClick={confirmBtn}>Ok</button>
      </div>
    </div>
  )
}

export default ConfirmationBox;