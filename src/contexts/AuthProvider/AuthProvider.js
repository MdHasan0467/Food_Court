import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../components/Firebase/Firebase.init';




export const AuthContext = createContext();


const auth = getAuth(app)



const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)








    //!   Create An User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    
    

    //!   signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }




    


    // For Observe an user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser',currentUser);
            setUser(currentUser);
        });


        return () => {
            return unsubscribe()
        }

    },[])




    const authInfo = {user, loading, createUser, signIn, }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;