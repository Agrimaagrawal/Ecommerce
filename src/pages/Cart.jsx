import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from '../components/Checkout'


const Cart = () => {
    const {state,dispatch,handlecheckout}=useContext(CartContext);
    
   
    if(state.cart?.length===0){
      return(
        <div>Cart is empty</div>
      )
    }
    const total=state.cart.reduce((total,item)=>{
     return Math.round(total+item.price*item.quantity)
    },0)
   
   
  return (
    <div>
      {
        
      state.cart.map((e)=>{
       
          return(
            
            <div key={e.id} className="flex gap-4">
              <img src={e.image} className="w-10"></img>
              <p>{e.title}</p>
              <p>{e.quantity*e.price}</p>
              <div className="flex gap-4">
                <button onClick={()=>dispatch({type:"INCREASE",payload:{id:e.id,quantity:e.quantity}})} >+</button>{e.quantity}<button onClick={()=>{e.quantity>1?dispatch({type:"DECREASE",payload:e}):dispatch({type:"REMOVE",payload:e})}}>-</button>
              </div>
              <button onClick={()=>dispatch({type:"REMOVE",payload:e})}>X</button>
             


            </div>
             
          )
      })
    }
    <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
    {
      state.cart.length>0 &&(
        <div>Total:{total}</div>
      )
    }
   <Checkout total={total}/>
    
    </div>
  )
}

export default Cart;
