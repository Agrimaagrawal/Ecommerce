import { CartContext } from "../context/CartContext"

import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Addtocart = ({data}) => {
    const GlobalState=useContext(CartContext);
  const dispatch=GlobalState.dispatch;
  const notify = (e) => toast(`${e.title} added to cart`);
  const help=(e)=>{
   e.target.disabled=true;

   
  }
  
  return (
    <div>
      <div><button className="bg-zinc-800 text-white p-4 addtocartbtn "  onClick={(event)=>{help(event); dispatch({type:'ADD',payload:data});notify(data);}}  >Add to cart</button></div>
      <ToastContainer 
                position="top-left"
                autoClose={2000}/>
    </div>
  )
}

export default Addtocart
