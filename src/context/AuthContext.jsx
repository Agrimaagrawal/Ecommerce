import { createContext } from "react";
import {GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged} from 'firebase/auth';
import { auth } from "../../firebase/firebaseclient";
import { useState,useEffect } from "react";


export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setUser]=useState({});
    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider);

    }
    const logout=()=>{
        signOut(auth);

    }
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser);
            console.log('User',currentuser);
       });
       return ()=>{
           unsubscribe();
       };
    },[]);
    return(
        <AuthContext.Provider value={{googleSignIn,logout,user}}>
              {children}
        </AuthContext.Provider>
    )

}
