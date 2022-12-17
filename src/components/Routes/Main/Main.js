import React from 'react';
import { Outlet } from 'react-router-dom';
import LargeNavBar from '../../Shared/NavBar/LargeNavBar/LargeNavBar';
import SmallNavBar from '../../Shared/NavBar/SmallNavBar/SmallNavBar';

const Main = () => {
    return (
			<div>
				<div className='hidden md:block'>
					<LargeNavBar></LargeNavBar>
					<Outlet></Outlet>
				</div>
            <div className=' md:hidden'>
            <Outlet></Outlet>
            <SmallNavBar></SmallNavBar>
				</div>
			</div>
		);
};

export default Main;