import React from 'react';
import { Link } from 'react-router-dom';

const LargeNavBar = () => {
    return (
			<div>
				<div className='navbar bg-transparent text-white'>
					<div className='navbar-start'>
						<a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
					</div>
					<div className='navbar-center hidden lg:flex'>
						<Link className='ml-5' to='/'>Home</Link>
						<Link className='ml-5' to='/addproduct'>Add Product</Link>
						<Link className='ml-5' to='/about'>About</Link>
					</div>
					<div className='navbar-end'>
						<a className='btn'>Login</a>
					</div>
				</div>
			</div>
		);
};

export default LargeNavBar;