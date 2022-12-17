import React from 'react';
import LargeNavBar from '../../Shared/NavBar/LargeNavBar/LargeNavBar';

const Home = () => {
    return (
			<div>
				<div className='bgBanner min-h-[50vh]'>
					<div className='hidden md:block'>
						<LargeNavBar></LargeNavBar>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div className='content'>
							<div className='text-white blurEffect text-start '>
								<h2 className='text-start ml-[20%] text-3xl'>Welcome To Our</h2>
								<h2 className='text-start ml-[20%] text-4xl'>Food Court Restaurant</h2>
							</div>
						</div>
						<div className=''></div>
					</div>
				</div>
			</div>
		);
};

export default Home;