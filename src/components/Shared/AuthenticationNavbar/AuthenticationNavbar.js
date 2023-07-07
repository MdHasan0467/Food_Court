import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Assets/Images/loginFood.png";

const AuthenticationNavbar = () => {
    return (
        <div>
        <div className='navbar bg-transparent text-white py-5'>
        <div className='navbar-start'>
        <Link className='nav flex' to='/'>
              <img className='w-16 h-10 rounded-lg mt-2' src={logo} alt='' />
            <h3 className=' flex items-center mx-5 text-xl group-hover:text-gray-800 font-semibold font-serif'>
                Food Court
            </h3>
        </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
            
            <Link className='ml-5 nav hover:text-white' to='/faq'>
			          FAQ
            </Link>
            <Link className='ml-5 nav hover:text-white' to='/about'>
                About
            </Link>
        </div>
                
    </div>
        </div>
    );
};

export default AuthenticationNavbar;