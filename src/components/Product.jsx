import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { getItem } from "localforage";


const Product = ({data,flag}) => {
  const GlobalState=useContext(CartContext);
  const dispatch=GlobalState.dispatch;
  console.log(GlobalState)
    
  return (
    <div className=" flex w-[100%] m-3 justify-around  ">
      {
        
        data.map((e)=>{
          e.quantity=1;
          return(
            <div key={e.id} className="w-[100px]">
                <div><img src={e.image}></img></div>
                <div>{e.title}</div>
                <div>{e.price}</div>
                <div><button className="bg-zinc-800 text-white p-4" onClick={()=>{dispatch({type:'ADD',payload:e})}}>Add to cart</button></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Product
