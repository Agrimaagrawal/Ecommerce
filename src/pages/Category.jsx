import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {apiGet} from "../api/api";
import { useState } from "react";
import Product from "../components/Product";
import Filter from "../components/Filter";
import  {FilterContext}  from "../context/FilterContext";
import { useContext } from "react";


const Category = () => {
 
  const {name}=useParams();
  const [data,setData]=useState([]);
 
  useEffect(()=>{
      apiGet(`/products/category/${name}`).then((content)=>{
         setData(content);
         

      })
      
  },[name])
  
  return (
    <div className=" w-[100%] h-[721px] flex ">
      
      <div className="w-full h-[721px] bg-slate-800 flex justify-center">
        <Product data={data} />
      </div>
      
      
      
    </div>
  )
}

export default Category
