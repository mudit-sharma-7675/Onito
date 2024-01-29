import { configureStore } from "@reduxjs/toolkit";
import TableReducer from "../Slices/TableSlice";

 const Store = configureStore({
  reducer: {
    table: TableReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;