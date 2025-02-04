import { createSlice } from "@reduxjs/toolkit";

const mainImageDataSlice = createSlice({
  name: "mainImageData",
  initialState:{
    mainImageData: null,
  },
  reducers:{
    addMainImageData: (state,action) =>{      
      
      state.mainImageData = action.payload;
    },

  }
})

export const {addMainImageData} = mainImageDataSlice.actions;

export default mainImageDataSlice.reducer;