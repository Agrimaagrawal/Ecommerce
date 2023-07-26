import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from '../components/Checkout';
import Navbar from "../components/Navbar";
import Emptycart from "../components/Emptycart";


const Cart = () => {
    const {state,dispatch,handlecheckout}=useContext(CartContext);
    
   
    if(state.cart?.length===0){
      return(
     <Emptycart/>
      )
    }
    const total=state.cart.reduce((total,item)=>{
     return Math.round(total+item.price*item.quantity)
    },0)
   
   
  return (
    <div >
      <Navbar/>
      <div className="flex flex-col gap-3 mt-7 p-3">
    {
        
      state.cart.map((e)=>{
       
          return(
            
            <div key={e.id} className="flex gap-9 xl:ml-12 items-center  xl:mr-12">
              <img src={e.image} className=" w-8 xl:w-16"></img>
              <p className=" text-xs xl:text-sm xl:w-[600px]">{e.title}</p>
              <p className="font-bold xl:pl-10 xl:w-[100px]">${e.quantity*e.price}</p>
              <div className="flex gap-4 xl:pl-16 xl:w-[200px] text-xl font-bold">
                <button onClick={()=>dispatch({type:"INCREASE",payload:{id:e.id,quantity:e.quantity}})} className="text-green-600 text-2xl font-extrabold ">+</button>{e.quantity}<button onClick={()=>{e.quantity>1?dispatch({type:"DECREASE",payload:e}):dispatch({type:"REMOVE",payload:e})}} className="text-red-600 text-2xl font-extrabold">-</button>
              </div>
              <button onClick={()=>dispatch({type:"REMOVE",payload:e})} className="text-2xl font-extrabold xl:pl-16">X</button>
             


            </div>
             
          )
      })
    }
    </div>
    <button onClick={()=>dispatch({type:"CLEAR"})} className="bg-red-500 p-2 text-lg rounded-lg w-28 shadow-lg ml-9 mt-5">Clear</button>
   <div className=" absolute right-4 xl:absolute xl:right-40"> {
      state.cart.length>0 &&(
        <div className="text-2xl pb-4 ">Total:{total}</div>
      )
    }
  
   <Checkout total={total}/>
   </div>
   
    
    </div>
  )
}

export default Cart;
