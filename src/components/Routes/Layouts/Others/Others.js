import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import LargeNavBar from '../../../Shared/NavBar/LargeNavBar/LargeNavBar';




const Others = () => {
    return (
        <div>
        <div className='hidden md:block'>
		<LargeNavBar></LargeNavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Others;