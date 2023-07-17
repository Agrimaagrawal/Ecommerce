import { useEffect } from "react";
import { createContext,useContext, useReducer } from "react";
import {Context} from '../context/productcontext';
import reducer from '../reducer/Filter'


export const FilterContext=createContext();
const initialState={
    filter_products:[],
    all_products:[],
    setFilter:false,
}

export const FilterProvider=({children})=>{
    const {Products}=useContext(Context);
    const [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
         dispatch({type:"LOAD_FILTER_PRODUCTS",payload:Products})
    },[Products])
    return(<FilterContext.Provider value={{...state}}>
         {children}
    </FilterContext.Provider>
    );
};



