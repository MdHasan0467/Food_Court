import React from 'react';
import { Link } from 'react-router-dom';

const BannerNavBar = () => {
    return (
        <div>
        <div className='navbar bg-transparent text-white py-5'>
        <div className='navbar-start'>
        <Link className='nav flex' to='/'>
        <img className='w-16 h-10 rounded-lg mt-2' src='FC.png' alt='' />
            <h3 className=' flex items-center mx-5 text-xl group-hover:text-gray-800 font-semibold font-serif'>
                Food Court
            </h3>
        </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
            <Link className='ml-5 nav hover:text-white' to='/'>
                Home
            </Link>
            <Link className='ml-5 nav hover:text-white' to='/add-product'>
                Add Product
            </Link>
            <Link className='ml-5 nav hover:text-white' to='/about'>
                About
            </Link>
        </div>
        <div className='navbar-end flex'>
        <Link className='btn bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r border-0 mx-1' to='/login'>Login</Link>
                    
		<Link className='btn bg-gradient-to-l from-violet-500 to-fuchsia-500 hover:bg-gradient-to-r border-0 mx-1' to='/register'>Register</Link>
        </div>
    </div>
        </div>
    );
};

export default BannerNavBar;