import { useReducer } from "react";
import { createContext } from "react";
import reducer from '../reducer/CartReducer';



export const CartContext=createContext();

 export const CartProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,[]);
    const info={state,dispatch}
    return(
        <>
        <CartContext.Provider value={info}>
            {props.children}
        </CartContext.Provider>
        </>
    )
}