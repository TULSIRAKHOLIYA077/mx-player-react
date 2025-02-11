import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: 'myList',
  initialState:{
    movies: []
  },
  reducers:{
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) =>{
      state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
    },
    clearMyList: (state, action) =>{
      state.movies.length = 0; 
    }
  }
});

export const {addMovie, removeMovie, clearMyList} = myListSlice.actions;
export default myListSlice.reducer;