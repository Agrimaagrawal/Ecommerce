import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {apiGet} from "../api/api";
import { useState } from "react";
import Product from "../components/Product";
import { useContext } from "react";
import Navbar from "../components/Navbar";


const Category = () => {
 
  const {name}=useParams();
  const [data,setData]=useState([]);
 
  useEffect(()=>{
      apiGet(`/products/category/${name}`).then((content)=>{
         setData(content);
         

      })
      
  },[name])
  
  return (
    <>
  <Navbar/>
    <div className=" w-[100%]  flex ">
     
      
      <div className="w-full   flex justify-center">
        <Product data={data} />
      </div>
      
      
      
    </div>
    </>
  )
}

export default Category
