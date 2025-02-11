import { createSlice } from "@reduxjs/toolkit";

const allMoviesSlice = createSlice({
  name: "allmovies",
  initialState:{
    movieListOneTitle: null,
    movieListOne: null,
    movieListTwoTitle: null,
    movieListTwo: null,
    movieListThreeTitle: null,
    movieListThree: null,
    movieListFourTitle: null,
    movieListFour: null,
    movieListFiveTitle: null,
    movieListFive: null,
    movieListSixTitle: null,
    movieListSix: null
  },
  reducers:{
    addmovieListOne: (state,action) =>{ 
      const {movieListOneTitle,movieListOne} =  action.payload;
      state.movieListOneTitle = movieListOneTitle;
      state.movieListOne = movieListOne; 
    },
    addmovieListTwo: (state,action) =>{      
      const {movieListTwoTitle,movieListTwo} =  action.payload;
      state.movieListTwoTitle = movieListTwoTitle;
      state.movieListTwo = movieListTwo; 
    },
    addmovieListThree: (state,action) =>{      
      const {movieListThreeTitle,movieListThree} =  action.payload;
      state.movieListThreeTitle = movieListThreeTitle;
      state.movieListThree = movieListThree; 
    },
    addmovieListFour: (state,action) =>{      
      const {movieListFourTitle,movieListFour} =  action.payload;
      state.movieListFourTitle = movieListFourTitle;
      state.movieListFour = movieListFour; 
    },
    addmovieListFive: (state,action) =>{      
      const {movieListFiveTitle,movieListFive} =  action.payload;
      state.movieListFiveTitle = movieListFiveTitle;
      state.movieListFive = movieListFive; 
    },
    addmovieListSix: (state,action) =>{      
      const {movieListSixTitle,movieListSix} =  action.payload;
      state.movieListSixTitle = movieListSixTitle;
      state.movieListSix = movieListSix; 
    }
  }
})

export const {addmovieListOne, addmovieListTwo, addmovieListThree, addmovieListFour, addmovieListFive, addmovieListSix} = allMoviesSlice.actions;

export default allMoviesSlice.reducer;