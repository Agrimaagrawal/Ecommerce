const product=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }
        case "SET_API_DATA":
            return{
                ...state,
                isLoading:false,
                Products:action.payload,
                
            }
            
        case "SET_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }
    }
       

}
export default product