import { useParams } from "react-router-dom";
import { useContext } from "react"
import { Context } from "../context/productcontext"
import  Navbar  from '../components/Navbar';
import Addtocart from '../components/Addtocart'


const SingleProduct = () => {
    const {id}=useParams();

    const {Products}=useContext(Context);

    const product=Products.find((e)=>{
    return e.id==id
      });
      console.log(product)
    
      
  return (
    <>
    <Navbar/>
    <div className="w-full h-screen flex flex-col  xl:flex-row ">
        <div className="flex flex-col justify-center items-center w-1/2 m-auto">
          
           <img src={product.image} className=" h-[300px] w-[400px] xl:h-[500px] xl:w-[600px]"></img>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 m-auto">
        <h1 className=" text-xl xl:text-4xl font-bold p-4 text-center">{product.title}</h1>
        <p className="text-lg xl:p-5">{product.description}</p>
        <h1 className="text-xl pt-4"><span className="font-bold ">Category: </span> {product.category}</h1>
        <h1 className="text-xl pt-4"><span className="font-bold ">Price: </span>${product.price}</h1>
        <h1 className="text-xl pt-4"><span className="font-bold ">Rating: </span>{product.rating.rate}</h1>
        <h1 className="text-xl pt-4"><span className="font-bold ">Product left: </span>{product.rating.count}</h1>
        <Addtocart data={product}/>
        </div>

    </div>
    </>
  )
}

export default SingleProduct
