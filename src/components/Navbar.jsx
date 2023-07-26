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
    <div className='w-full h-12 bg-black flex justify-between p-2 '>
      <Link to='/'><div className='text-gray-200 font-bold text-xl'>StyleHub</div></Link>
      <div className='flex gap-5 '>
      <div className='text-white bg-red-300 p-1 rounded-lg md:text-xl pl-2 pr-2 hover:bg-slate-400'><Link to='/signinpage' >{user?<button onClick={signout}>Sign out</button>:<button>Sign in</button>}</Link></div>
      <Link to='/cart' className='text-white p-1 '>Cart<span className='font-bold  '>({val})</span></Link>
      </div>
    </div>
  )
}

export default Navbar;
