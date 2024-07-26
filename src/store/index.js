import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./FilterSlice";
import paginationSlice from "./PaginationSlice";
const store = configureStore({
  reducer: { filter: filterSlice.reducer,pagination:paginationSlice.reducer },
});

export default store;
