import { createSlice } from "@reduxjs/toolkit";

const mainImageDataSlice = createSlice({
  name: "mainImageData",
  initialState:{
    mainImageData: null,
    showsMainImageData: null,
    allMoviesMainImageData: null,
    newHotMainImageData: null,
    mxVDesiMainImageData:null
  },
  reducers:{
    addMainImageData: (state,action) =>{      
      
      state.mainImageData = action.payload;
    },
    addShowsMainImageData: (state,action) =>{      
      
      state.showsMainImageData = action.payload;
    },
    addAllMoviesMainImageData: (state,action) =>{      
      
      state.allMoviesMainImageData = action.payload;
    },
    addNewHotMainImageData: (state,action) =>{      
      
      state.newHotMainImageData = action.payload;
    },
    addMXVDesiMainImageData: (state,action) =>{      
      
      state.allMoviesMainImageData = action.payload;
    },

  }
})

export const {addMainImageData,addShowsMainImageData,addAllMoviesMainImageData, addNewHotMainImageData, addMXVDesiMainImageData} = mainImageDataSlice.actions;

export default mainImageDataSlice.reducer;