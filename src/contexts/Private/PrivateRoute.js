import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Shared/Loader/Loader';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    //-----------
    const { user, loading } = useContext(AuthContext)


    //-----------
    const location = useLocation()
    




    // //! Loding . . .
	
	
	if (loading) {
		return <Loader></Loader>
    }
    








    

		if (user && user.uid) {
			return children;
		}
		return <Navigate to='/authentication/login' state={{ from: location }} replace > </Navigate>
      
};

export default PrivateRoute;