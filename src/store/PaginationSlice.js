import { createSlice } from "@reduxjs/toolkit";
const paginationSlice=createSlice({
    name:"pagination",
    initialState:{
        currentPage:1,
        totalPage:0,
        pageLimit:5
    },
    reducers:{
        updatePage(state,action){
state.currentPage=action.payload
        },
        calTotalPage(state,action){
            state.totalPage=action.payload
        },
        setPageLimit(state,action){
state.pageLimit=action.payload;
        }
    },
})
export const PaginationActions=paginationSlice.actions;
export default paginationSlice;