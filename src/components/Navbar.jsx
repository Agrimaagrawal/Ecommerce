import{Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  const {state,dispatch}=useContext(CartContext);
  const {logout,user}=useContext(AuthContext);
  let val=state.value
  const signout=()=>{
    logout();
  }

  return (
    <div className='w-full h-8 bg-black flex justify-end gap-3'>
      <div className='text-white'><Link to='/signinpage' >{user?<button onClick={signout}>Sign out</button>:<button>Sign in</button>}</Link></div>
      <Link to='/cart' className='text-white'>Cart</Link>
      <div className='text-white'>({val})</div>
    </div>
  )
}

export default Navbar;
