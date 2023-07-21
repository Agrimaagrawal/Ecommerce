import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from '../reducer/CartReducer';
import { AuthContext } from "./AuthContext";
import { collection, addDoc } from "firebase/firestore";
import {fs} from '../../firebase/firebaseclient' 

const getLocalCartData=()=>{
    let newCartData=localStorage.getItem("Cart");
    
    if(newCartData === []){
        return [];
    }else{
        return JSON.parse(newCartData)
    }
}
const getval=()=>{
    let val=JSON.parse(localStorage.getItem("val"));
    if(val===null){
        return 0;
    }
    else{
        return val;
    }
}
const Addtofirebase=(user,s)=>{
    if(user!=null){
       addDoc(collection(fs,'users'),{
        s
       })
    }
    


}

export const CartContext=createContext();
const initialState={
    cart:getLocalCartData(),
    value:getval()
}


 export const CartProvider=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const {user}=useContext(AuthContext);
    const info={state,dispatch}
    useEffect(()=>{
       localStorage.setItem("Cart",JSON.stringify(state.cart));
       localStorage.setItem("val",JSON.stringify(state.value));
       Addtofirebase(user,state.cart);
    },[state.cart,state.value]);
    return(
        <>
        <CartContext.Provider value={info}>
            {props.children}
        </CartContext.Provider>
        </>
    )
}