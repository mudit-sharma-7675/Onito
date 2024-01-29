import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TableSlice {
  username: string;
  mobile: string;
  dob: string;
  sex: string;
  govtId: string;
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
}

const initialState: TableSlice = {
  username: "",
  mobile: "",
  dob: "",
  sex: "",
  govtId: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pincode: "",
};

export const TableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changeTableFunction: (state, action: any) => {
      let name = action.payload.name;
      let value = action.payload.value;
      return {
        ...state,
        [name]: value,
      };
    },
    ChangeTableData:(state,action:any)=>{
        state.address="";
        state.city="";
        state.country="";
        state.dob="";
        state.govtId="";
        state.mobile="";
        state.pincode="";
        state.sex="";
        state.state="";
        state.username="";
    },
    countryFunction:(state,action)=>{
        state.country=action.payload.value.label

    }
  },
});
export const { changeTableFunction ,ChangeTableData,countryFunction} = TableSlice.actions;
export default TableSlice.reducer;
