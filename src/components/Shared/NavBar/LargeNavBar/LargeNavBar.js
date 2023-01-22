import React, { useContext } from 'react';
import { BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { Switch } from '@headlessui/react';
import { useState } from 'react'
import LargeButton from '../../LargeButton/LargeButton';

const LargeNavBar = () => {


	    //!  Current User
		const { user, logOut, logUser } = useContext(AuthContext)


  
  
      //! State for Switch
      const [enabled, setEnabled] = useState(false)



    
    //! Navigate
    const navigate = useNavigate()







    //!  Logout
    const handleLogOut = () => {
        logOut()
        navigate('/login')
        toast.error('LogOut')
    }

	return (
		<div>
			<div className='navbar bg-transparent text-white py-5'>
				<div className='navbar-start group'>
				<Link className='nav flex' to='/'>
				<img className='w-16 h-10 rounded-lg mt-2' src='FC.png' alt='' />
					<h3 className=' flex items-center mx-5 text-xl group-hover:text-gray-800 font-semibold font-serif'>
						Food Court
					</h3>
				</Link>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<Link  className=' ml-5 nav hover:text-gray-800' to='/'>
						Home
					</Link>
				
					<Link  className=' ml-5 nav hover:text-gray-800' to='/add-product'>
						Add Product
					</Link>
					
					<Link  className=' ml-5 nav hover:text-gray-800' to='/faq'>
						FAQ
					</Link>
					<Link  className=' ml-5 nav hover:text-gray-800' to='/about'>
						About
					</Link>
					<Link  className=' ml-5 nav hover:text-gray-800' to='/dashboard'>
          Dashboard
					</Link>
        </div>
                    

				<div className='navbar-end flex'>
        <Link title='My Orders' className=' ml-5 nav hover:text-gray-800' to='/Orders'>
          <BsFillCartCheckFill></BsFillCartCheckFill>
        </Link>
      
        <Link title='My Wishes' className=' ml-5 nav hover:text-gray-800' to='/wishes'>
          <BsFillSuitHeartFill></BsFillSuitHeartFill>
        </Link>
          </div>
          
				<div className='navbar-end flex'>
        {user?.uid &&
        <>
        <div className="dropdown dropdown-end tooltip tooltip-left tooltip-primary" data-tip="Click here">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
          <div className="w-16 rounded-full ring ring-primary hover:ring-secondary ring-offset-base-100 ring-offset-2">
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
          <LargeButton>Settings</LargeButton>
          </li>
          <li onClick={handleLogOut}>
          <LargeButton>LogOut</LargeButton>
          </li>
          <div className="py-2 flex">
          <h1 className='mx-2 flex items-center text-gray-400'>Light</h1>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-violet-500' : 'bg-fuchsia-500'}
                relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                  pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <h1 className='mx-2 flex items-center text-gray-400'>Night</h1>
          </div>
        </ul>
      </div>
        </>
        
        }
        </div>
			</div>
		</div>
	);
};

export default LargeNavBar;
