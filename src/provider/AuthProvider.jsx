import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }


  const registerUserwithPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user){

        setUser(user);
        setLoading(false);
      }
      return () => unsubscribe(); //cleanup function
    })
  },[])

  useEffect(()=>{
    if(!user) return;
    axios.get(`http://localhost:5000/users/role/${user.email}`)
    .then(res => console.log(res.data.role));
    
  },[user])
  

  const authData = {
    registerUserwithPass, user , setUser, handleGoogleSignIn,loading
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
