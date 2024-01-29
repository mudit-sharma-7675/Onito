import {  createContext, useReducer, } from "react";
import { useDispatch } from "react-redux";
import {changeTableFunction} from "../Redux/Slices/TableSlice";
import {reducer,initialValue} from "./reducer";

const AppContext=createContext<|null|any>(null);



const AppProvider=({children}:any)=>{
    const [TableState,DispatchTableList]=useReducer(reducer,initialValue)
    const dispatch=useDispatch();
const handleInputChange=(e:any)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name)
    dispatch(changeTableFunction({ name, value }));
}

return <AppContext.Provider value={{handleInputChange ,...TableState,DispatchTableList}}>

    {children}
</AppContext.Provider>
}

export {AppContext,AppProvider};