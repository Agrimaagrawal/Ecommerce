const CartReducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            const tempState=state.filter((item)=>action.payload.id===item.id);
            if(tempState.length>0){
                return state
            }
            else{
                return [...state,action.payload]
            }
        case"INCREASE":
            // eslint-disable-next-line no-case-declarations
            const increase=state.map((item)=>{
                 if(item.id===action.payload.id){
                    return {...item,quantity:item.quantity+1}
                 }
                 else{
                    return item
                 }
          });
          return increase;

        case"DECREASE":
              // eslint-disable-next-line no-case-declarations
              const decrease=state.map((item)=>{
                if(item.id===action.payload.id){
                    return  {...item,quantity:item.quantity<0?0:item.quantity-1}
              }
              else{
                return item
              }
              });
              return decrease;
                  
          
           

    }

}
export default CartReducer