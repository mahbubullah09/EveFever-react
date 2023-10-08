import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);


    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    


//singup
    const createUser = (email,password) => {
        setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)    
}

//singin

const login = (email,password) => {
    setLoading(true);
   return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth)
}

//observer

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false);

      
      });
      return () =>{
        unsubscribe()
      }
      
},[])

    const authentication = {
        googleLogin,
        user,
        createUser,
        login,
        logOut,
        loading
    }



    return (
        <AuthContext.Provider value={authentication}>

            {children}

        </AuthContext.Provider>
)};

export default AuthProvider;