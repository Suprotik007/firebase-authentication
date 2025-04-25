import React from 'react';
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import {auth} from '../firebase'
const Login = () => {
    const provider=new GoogleAuthProvider
    const handleLogin=()=>{
        console.log('clicked google');
        signInWithPopup(auth, provider)
        .then(result=>{
console.log(result);

        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    return (
        <div>
          <button onClick={handleLogin}>Sign in with Google</button>  
        </div>
    );
};

export default Login;