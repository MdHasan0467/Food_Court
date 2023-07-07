import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../components/Firebase/Firebase.init';
import axios from 'axios';




export const AuthContext = createContext();


const auth = getAuth(app)



const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
	const [logUser, setLogUser] = useState();
// For Filter sorting data
    const [sortedData, setSortedData] = useState([]);
    const [sortedPriceData, setSortedPriceData] = useState([]);

    const [filteredData, setFilteredData] = useState([]);

    const [hasSearched, setHasSearched] = useState(false);


// console.log(logUser);


    // ! Get login User from database

    useEffect(() => {
		fetch(`https://food-court-server-three.vercel.app/${user?.email}`)
			.then((res) => res.json())
			.then((result) => {
				setLogUser(result?.result);
			});
	}, [user?.email]);


    


  








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




    const authInfo = {
        user, loading, createUser, signIn,logOut,logUser,filteredData,
        setFilteredData, hasSearched, setHasSearched, sortedData, setSortedData,
        sortedPriceData, setSortedPriceData
     }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;