import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../components/Firebase/Firebase.init';




export const AuthContext = createContext();


const auth = getAuth(app)



const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)








    //!   Create An User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    
    

    //!   LogIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }





    //!   logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }








    


    // For Observe an user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('currentUser',currentUser);
            setUser(currentUser);
        });


        return () => {
            return unsubscribe()
        }

    },[])




    const authInfo = {user, loading, createUser, signIn,logOut, }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;