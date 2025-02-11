import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
  name: "trailer",
  initialState:{
    movieListOne: null,
    movieListTwo: null,
  },
  reducers:{
    addmovieListOne: (state,action) =>{ 
      state.movieListOne = action.payload; 
    },
    addmovieListTwo: (state,action) =>{ 
      state.movieListTwo = action.payload; 
    },
  }
})

export const {addmovieListOne, addmovieListTwo} = trailerSlice.actions;

export default trailerSlice.reducer;