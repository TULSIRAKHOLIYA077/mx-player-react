import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
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
    movieListSix: null,
    movieListSevenTitle: null,
    movieListSeven: null,
    movieListEightTitle: null,
    movieListEight: null,
    movieListNineTitle: null,
    movieListNine: null,
    movieListTenTitle: null,
    movieListTen: null,
    movieListElevenTitle: null,
    movieListEleven: null,
    movieListTwelveTitle: null,
    movieListTwelve: null,
    movieListThirteenTitle: null,
    movieListThirteen: null,
    movieListFourteenTitle: null,
    movieListFourteen: null,
    movieListFifteenTitle: null,
    movieListFifteen: null,
    movieListSixteenTitle: null,
    movieListSixteen: null,
    movieListSeventeenTitle: null,
    movieListSeventeen: null,
    movieListEightteenTitle: null,
    movieListEightteen: null,
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
    },
    addmovieListSeven: (state,action) =>{      
      const {movieListSevenTitle,movieListSeven} =  action.payload;
      state.movieListSevenTitle = movieListSevenTitle;
      state.movieListSeven = movieListSeven; 
    },
    addmovieListEight: (state,action) =>{      
      const {movieListEightTitle,movieListEight} =  action.payload;
      state.movieListEightTitle = movieListEightTitle;
      state.movieListEight = movieListEight; 
    },
    addmovieListNine: (state,action) =>{      
      const {movieListNineTitle,movieListNine} =  action.payload;
      state.movieListNineTitle = movieListNineTitle;
      state.movieListNine = movieListNine; 
    },
    addmovieListTen: (state,action) =>{      
      const {movieListTenTitle,movieListTen} =  action.payload;
      state.movieListTenTitle = movieListTenTitle;
      state.movieListTen = movieListTen; 
    },
    addmovieListEleven: (state,action) =>{      
      const {movieListElevenTitle,movieListEleven} =  action.payload;
      state.movieListElevenTitle = movieListElevenTitle;
      state.movieListEleven = movieListEleven ? movieListEleven : null; 
    },
    addmovieListTwelve: (state,action) =>{      
      const {movieListTwelveTitle,movieListTwelve} =  action.payload;
      state.movieListTwelveTitle = movieListTwelveTitle;
      state.movieListTwelve = movieListTwelve; 
    },
    addmovieListThirteen: (state,action) =>{      
      const {movieListThirteenTitle,movieListThirteen} =  action.payload;
      state.movieListThirteenTitle = movieListThirteenTitle;
      state.movieListThirteen = movieListThirteen; 
    },
    addmovieListFourteen: (state,action) =>{      
      const {movieListFourteenTitle,movieListFourteen} =  action.payload;
      state.movieListFourteenTitle = movieListFourteenTitle;
      state.movieListFourteen = movieListFourteen; 
    },
    addmovieListFifteen: (state,action) =>{      
      const {movieListFifteenTitle,movieListFifteen} =  action.payload;
      state.movieListFifteenTitle = movieListFifteenTitle;
      state.movieListFifteen = movieListFifteen; 
    },
    addmovieListSixteen: (state,action) =>{      
      const {movieListSixteenTitle,movieListSixteen} =  action.payload;
      state.movieListSixteenTitle = movieListSixteenTitle;
      state.movieListSixteen = movieListSixteen; 
    },
    addmovieListSeventeen: (state,action) =>{      
      const {movieListSeventeenTitle,movieListSeventeen} =  action.payload;
      state.movieListSeventeenTitle = movieListSeventeenTitle;
      state.movieListSeventeen = movieListSeventeen; 
    },
    addmovieListEightteen: (state,action) =>{      
      const {movieListEightteenTitle,movieListEightteen} =  action.payload;
      state.movieListEightteenTitle = movieListEightteenTitle;
      state.movieListEightteen = movieListEightteen; 
    }

  }
})

export const {addmovieListOne, addmovieListTwo, addmovieListThree, addmovieListFour, addmovieListFive, addmovieListSix, addmovieListSeven, addmovieListEight, addmovieListNine, addmovieListTen, addmovieListEleven, addmovieListTwelve, addmovieListThirteen, addmovieListFourteen, addmovieListFifteen, addmovieListSixteen, addmovieListSeventeen, addmovieListEightteen} = moviesSlice.actions;

export default moviesSlice.reducer;