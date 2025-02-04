import { configureStore } from "@reduxjs/toolkit"; 
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import mainImageDataReducer from "./mainImageDataSlice";

const appStore = configureStore(
  {
    reducer:{
      user: userReducer,
      movies: moviesReducer,
      mainImageData: mainImageDataReducer
    }
  }
)

export default appStore;