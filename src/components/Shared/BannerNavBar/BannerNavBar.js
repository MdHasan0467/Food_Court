import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from '../Button/Button';

const BannerNavBar = () => {

    //!  Current User
    const { user, logOut } = useContext(AuthContext)



    
    //! Navigate
    const navigate = useNavigate()







    //!  Logout
    const handleLogOut = () => {
        logOut()
        navigate('/login')
        alert('LogOut')
    }








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
            <Link className='ml-5 nav hover:text-white' to='/faq'>
			FAQ
			</Link>
            <Link className='ml-5 nav hover:text-white' to='/about'>
                About
            </Link>
        </div>
        <div className='navbar-end flex'>
        {user?.uid ?
        <>
        <p className='text-yellow-400 mx-2 text-3xl'>{user?.email}</p>
        
        
        
       <div onClick={handleLogOut}>
       <Button>LogOut</Button>
       </div>
        </>
        :
        <>
        <Link className="mx-1" to='/login'>
        <Button>Login</Button>
        </Link>
                    
		<Link className="mx-1" to='/register'>
        <Button>Register</Button>
        </Link>
        </>
        }
        </div>
    </div>
        </div>
    );
};

export default BannerNavBar;