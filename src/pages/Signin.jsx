

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
    <div >
     {user?<Home/>:
      <button onClick={()=>signInWithGoogle()}><GoogleButton/></button>
}
    </div>
  
  )
}

export default Signin
