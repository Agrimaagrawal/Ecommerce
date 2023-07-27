
import Addtocart from '../components/Addtocart';
import { Link } from 'react-router-dom';



const Product = ({data,flag}) => {  
  return (
    <div className=" flex w-[100%] m-3 gap-4 flex-wrap justify-center ">
      {
        
        data.map((e)=>{
          e.quantity=1;
          return(
            <div  className="w-[300px] shadow-xl flex flex-col items-center p-5 " key={e.id}>
                
                <div><img src={e.image} className="w-[300px] h-[300px] p-2 "></img></div>
                <div className='text-center p-2'>{e.title}</div>
                <div className='p-2'>${e.price}</div>
                <Addtocart data={e}/>
                {console.log(e)}
                
            </div>
            
          )
        })
      }
    </div>
  )
}

export default Product
