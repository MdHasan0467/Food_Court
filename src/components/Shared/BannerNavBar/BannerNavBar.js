import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from '../Button/Button';
import LargeButton from '../LargeButton/LargeButton';

const BannerNavBar = () => {

    //!  Current User
    const { user, logOut, logUser } = useContext(AuthContext);



    
    //! Navigate
    const navigate = useNavigate();







    //!  Logout
    const handleLogOut = () => {
        logOut();
        navigate('/login');
        alert('LogOut');
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
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className=""  src={logUser?.image} />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <h2 className="justify-between bg-gradient-to-l from-yellow-500 to-fuchsia-500 border-0 rounded-xl">
              {logUser?.name}
              <span className="badge bg-gradient-to-l to-violet-500 from-fuchsia-500 border-0">{logUser?.role}</span>
            </h2>
          </li>
          <li>
          <LargeButton>Dashboard</LargeButton>
          </li>
          <li onClick={handleLogOut}>
          <LargeButton>LogOut</LargeButton>
          </li>
        </ul>
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