import React from 'react';
import { Outlet } from 'react-router-dom';
import LargeNavBar from '../../Shared/NavBar/LargeNavBar/LargeNavBar';




const Others = () => {
    return (
        <div>
        <div className='hidden md:block'>
		<LargeNavBar></LargeNavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Others;