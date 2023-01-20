import React, { useContext } from 'react';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';

const DashboardWelcome = () => {

    //!  Current User
    const { logUser } = useContext(AuthContext);



    return (
        <div className="bg-deep-purple-accent-700">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center rounded-full bg-teal-accent-400">
                <img className='w-16 h-10 rounded-lg mt-2' src='FC.png' alt='logo' />
                </div>
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-600 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                        <p className="relative text-start text-gray-600">Welcome to </p>
                        <p className='text-start text-gray-600 text-2xl py-3'>Food Court Restaurant's Dashboard</p>
                  </span>
                  
                </h2>
                
              </div>
              <div className='button hidden'>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardWelcome;