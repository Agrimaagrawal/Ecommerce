import{Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Navbar = () => {
  const {state,dispatch}=useContext(CartContext);
  let val=state.value

  return (
    <div className='w-full h-8 bg-black flex justify-end'>
      <Link to='/cart' className='text-white'>Cart</Link>
      <div className='text-white'>({val})</div>
    </div>
  )
}

export default Navbar;
