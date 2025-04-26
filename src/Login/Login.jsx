import React, { useState } from 'react';
import { GoogleAuthProvider ,signInWithPopup, signOut} from "firebase/auth";
import {auth} from '../firebase'
const Login = () => {
    const[user,setUser]=useState(null)
    const provider=new GoogleAuthProvider
    const handleLogin=()=>{
        console.log('Logged in');
        signInWithPopup(auth, provider)
        .then(result=>{
console.log(result);
setUser(result.user)

        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    const handleLogOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('Logged Out');
            setUser(null)
            
        })
        .catch(error=>{
            console.log(error);
            
        })

    }
    return (
        <div>
          {/* <div>
          <button onClick={handleLogin}>Sign in </button>  
          <button onClick={handleLogOut}>Sign out</button>  
          </div> */}
          {
            user ?
            <button onClick={handleLogOut}>Sign out</button> :<button onClick={handleLogin}>Sign in </button> 
          }
          {
            user &&<div>
            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
          }
        </div>
    );
};

export default Login;