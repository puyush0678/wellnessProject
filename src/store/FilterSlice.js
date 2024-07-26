import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
  searchBar:"",
  filterByDate:"",
  filterByType:"",
  event:[],
  currentPageEvent:[]
  },
  reducers: {
   filterBySearchBar(state,action){
    state.searchBar=action.payload;
   },
   filterByDate(state,action){
    state.filterByDate=action.payload;
   },
   filterByType(state,action){
    state.filterByType=action.payload;
   },
   storeData(state,action){
    state.event=action.payload;
   },
   storeCurrentPageData(state,action)
   {
    state.currentPageEvent=action.payload
   
   }
  },
});

export const FilterActions = filterSlice.actions;

export default filterSlice;

// dispatch(FilterActions.storeCurrentPageData({currentPage:1,pageLimit:pageLimit}))