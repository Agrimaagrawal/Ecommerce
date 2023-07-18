import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from '../reducer/CartReducer';

const getLocalCartData=()=>{
    let newCartData=localStorage.getItem("Cart");
    if(newCartData === []){
        return [];
    }else{
        return JSON.parse(newCartData)
    }
}

export const CartContext=createContext();
const initialState={
    cart:getLocalCartData(),
    value:0
}

 export const CartProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const info={state,dispatch}
    useEffect(()=>{
       localStorage.setItem("Cart",JSON.stringify(state.cart));
    },[state.cart]);
    return(
        <>
        <CartContext.Provider value={info}>
            {props.children}
        </CartContext.Provider>
        </>
    )
}