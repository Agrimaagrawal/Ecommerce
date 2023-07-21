const CartReducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            const tempState=state.cart.filter((item)=>action.payload.id===item.id);
            if(tempState.length>0){
                return {
                    ...state
                }
            }
            else{
                return {
                    ...state,
                    cart:[...state.cart,action.payload],
                    value:state.value+1
                }
            }
        case"INCREASE":
            // eslint-disable-next-line no-case-declarations
            return{
                ...state,
                cart:state.cart.filter((c)=>c.id===action.payload.id?(c.quantity=action.payload.quantity+1):c.quantity)
            }

        case"DECREASE":
              // eslint-disable-next-line no-case-declarations
              return{
                ...state,
                cart:state.cart.filter((c)=>c.id===action.payload.id?(c.quantity=action.payload.quantity-1):c.quantity)
            }
        
        case "REMOVE":
            
            
            
             return {
                ...state,
                cart:state.cart.filter((item)=>item.id!== action.payload.id),
                value:state.cart.length===0?0:state.value-1
                
             };
        case "CLEAR":
            return{
                ...state,
                cart:[],
                value:0
                
            }
             
                
            
          
             
                  
          
           

    }

}
export default CartReducer