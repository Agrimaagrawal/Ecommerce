import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from '../reducer/CartReducer';
import { AuthContext } from "./AuthContext";
import { setDoc,doc,onSnapshot } from "firebase/firestore";
import {fs} from '../../firebase/firebaseclient' ;



const getLocalCartData=()=>{
    let newCartData=localStorage.getItem("Cart");
    
    if(newCartData===[]){
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

const Addtofirebase=(user,s,value)=>{
    if(user!=null||user!=undefined){
        const data={
            s:s,
            value:value
        }
      setDoc(doc(fs,`cart ${user.uid}`,'s'),{
        data
      });
      console.log("sucess")
    }
    


}


const getData=(u)=>{
    if(u===null){
        return [];
    }
    else{
     return onSnapshot(doc(fs, `cart ${u.uid}`,'s'), (doc) => {
                doc.data().data.s;
         
     })
    
     
    }
     
     
    
    
}
const getvalue=(u)=>{
    if(u===null){
        return 0;
    }
    else{
    const data=onSnapshot(doc(fs, `cart ${u.uid}`,'s'), (doc) => {
        doc.data().data.value;
 
    })
         return data
    }

}




export const CartContext=createContext();
const initialState={
    cart:getLocalCartData(),
    value:getval()
}

 export const CartProvider=(props)=>{
    const {user}=useContext(AuthContext);
    
    
    const [state,dispatch]=useReducer(reducer,initialState);
    
   
    
    
    
    const handlecheckout=(user,total)=>{
      settoD(user,total);
    
    }
    const info={state,dispatch,handlecheckout};
   
    useEffect(()=>{
       localStorage.setItem("Cart",JSON.stringify(state.cart));
       localStorage.setItem("val",JSON.stringify(state.value));
       Addtofirebase(user,state.cart,state.value);
      
       
     
      
    },[state.cart,state.value]);
   
    
    return(
        <>
        <CartContext.Provider value={info}>
            {props.children}
        </CartContext.Provider>
        </>
    )
}