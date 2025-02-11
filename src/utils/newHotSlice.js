import { createSlice } from "@reduxjs/toolkit";

const newHotSlice = createSlice({
  name: "newHot",
  initialState:{
    movieListOneTitle: null,
    movieListOne: null,
    movieListTwoTitle: null,
    movieListTwo: null,
    movieListThreeTitle: null,
    movieListThree: null,
    movieListFourTitle: null,
    movieListFour: null,
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
  }
})

export const {addmovieListOne, addmovieListTwo, addmovieListThree, addmovieListFour} = newHotSlice.actions;

export default newHotSlice.reducer;