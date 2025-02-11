import { configureStore } from "@reduxjs/toolkit"; 
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import mainImageDataReducer from "./mainImageDataSlice";
import showsReducer from "./showsSlice";
import allMoviesReducer from "./AllMoviesSlice";
import newHotReducer from "./newHotSlice";
import mxVDesiReducer from "./mxVDesiSlice";
import trailerReducer from "./trailerSlice";
import myListReducer from "./myListSlice";


const appStore = configureStore(
  {
    reducer:{
      user: userReducer,
      movies: moviesReducer,
      mainImageData: mainImageDataReducer,
      shows: showsReducer,
      allMovies: allMoviesReducer,
      newHot: newHotReducer,
      mxVDesi: mxVDesiReducer,
      trailer: trailerReducer,
      myList: myListReducer

    }
  }
)

export default appStore;