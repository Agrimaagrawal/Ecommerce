

import { useContext } from 'react'
import {GoogleButton} from 'react-google-button'
import { AuthContext } from '../context/AuthContext';
import Home from './Home';

const Signin = () => {
  const {googleSignIn,user} =useContext(AuthContext);
  const signInWithGoogle=()=>{
    googleSignIn();
  }
  

  return (
    <>
    
    <div >
     {user?<Home/>:
     <div className='flex justify-center items-center h-screen flex-col'>
      <h1 className='text-4xl pt-3 font-semibold'>Sign in</h1>
      <button onClick={()=>signInWithGoogle()} className="m-auto"><GoogleButton/></button>
      </div>
}
    </div>
    </>
  
  )
}

export default Signin
