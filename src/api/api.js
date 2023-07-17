const BASEURL="https://fakestoreapi.com";
 export const apiGet=async(query)=>{
   const response=await fetch(`${BASEURL}${query}`);
   const data=await response.json();
  
   return data;
   
}



