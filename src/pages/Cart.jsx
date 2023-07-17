import { getItem } from "localforage";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const Cart = () => {
    const {state,dispatch}=useContext(CartContext);
   
  return (
    <div>
      {
      state.map((e)=>{
          return(
            <div key={e.id} className="flex gap-4">
              <img src={e.image} className="w-10"></img>
              <p>{e.title}</p>
              <p>{e.quantity*e.price}</p>
              <div className="flex gap-4">
                <button onClick={()=>dispatch({type:"INCREASE",payload:e})}>+</button>{e.quantity}<button onClick={()=>dispatch({type:"DECREASE",payload:e})}>-</button>
              </div>
              <button>X</button>


            </div>
          )
      })
    }
    </div>
  )
}

export default Cart;
