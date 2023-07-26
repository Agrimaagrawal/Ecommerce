import { useContext } from "react"
import { Context } from "../context/productcontext"
import { Link } from "react-router-dom"
const Allproducts = () => {
    const {Products}=useContext(Context)
  return (
    <>
    <h1 className='text-4xl text-center p-28'>Most Rated Products</h1>
    <div className="flex w-full flex-wrap justify-center gap-5  ">
        
        {
            Products.filter(product=>product.rating.rate>4.0).map((e=>{
                e.quantity=1;
                return(
               <Link to={`/product/${e.id}`} key={e.id}><div  className="h-[350px] w-[400px] flex-col flex items-center shadow-2xl p-3 gap-2">
                    <img src={e.image} className="h-[200px] w-[200px]"></img>
                    <h1 className="text-lg">{e.title}</h1>
                    <div>Rating:<span className="text-yellow-500 font-bold"> {e.rating.rate}</span></div>
                </div>
                </Link>
                )
            }))
        }
    </div>
    </>
    )
}

export default Allproducts
