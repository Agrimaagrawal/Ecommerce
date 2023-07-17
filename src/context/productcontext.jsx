import { useReducer,useEffect } from "react";
import reducer from '../reducer/product'
import { createContext } from "react";



export const Context=createContext();
const BASEURL="https://fakestoreapi.com";
const initialState={
    isLoading:'false',
    isError:'false',
    Products:[]
}



const AppContext=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const apiGet=async(query)=>{
        dispatch({type:"SET_LOADING"})
        try{
            const response=await fetch(`${BASEURL}${query}`);
            const data=await response.json();
            dispatch({type:"SET_API_DATA",payload:data})
            
        }
        catch(error){
            dispatch({type:"SET_ERROR"})
        }
       
      
    
        
     }
    

    useEffect(()=>{
        
        apiGet('/products')
           

           
    },[])
    
    
    
    return(
       <>
       <Context.Provider value={{...state}}>
        {props.children}
        </Context.Provider>
        </>
       
    )

}
export default  AppContext

