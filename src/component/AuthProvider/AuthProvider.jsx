import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const googleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider()
   const singUp=(email,password)=>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
   }

   const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   const githubLogin=()=>{ 
    setLoading(true)
    return signInWithPopup(auth,githubProvider).then(result=>console.log(result.user)).catch(error=>console.log(error.massage))
}
   const logOut=()=>{
    setLoading(true)
    return signOut(auth).then(result=>console.log(result)).catch(error=>console.log(error.massage))
   }
   const updateUser=(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})
   }
   const resetPassword=(email)=>{
    setLoading(true)
    sendPasswordResetEmail(auth,email)
    .then(result=>{
        setLoading(false)
        console.log(result)}).catch(error=>console.log(error.massage))
   }
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
        
    })
    return () => {
        unSubscribe()
    }
}, [])
    const authInfo={
        singUp,
        login,
        updateUser,
        logOut,
        googleLogin,
        resetPassword,
        githubLogin,
        user,
        loading,
    }
    return (
        <div>
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;