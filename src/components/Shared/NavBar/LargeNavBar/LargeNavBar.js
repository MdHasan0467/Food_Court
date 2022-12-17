import React from 'react';
import { Link } from 'react-router-dom';

const LargeNavBar = () => {
	return (
		<div>
			<div className='navbar bg-transparent text-white'>
				<div className='navbar-start'>
				<Link className='nav flex' to='/'>
				<img className='w-16 h-10 rounded-lg mt-2' src='FC.png' alt='' />
					<a className='btn btn-ghost normal-case text-xl'>
							Food Court
							</a>
							</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<Link className='ml-5 nav' to='/'>
						Home
					</Link>
					<Link className='ml-5 nav' to='/addproduct'>
						Add Product
					</Link>
					<Link className='ml-5 nav' to='/about'>
						About
					</Link>
				</div>
				<div className='navbar-end'>
					<a className='btn'>Login</a>
				</div>
			</div>
		</div>
	);
};

export default LargeNavBar;
