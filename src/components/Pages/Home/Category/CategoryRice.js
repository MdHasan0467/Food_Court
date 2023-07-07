import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CategoryRice = ({getCategoryRice}) => {
    return (
      <div className=' hover:scale-105 duration-500 cursor-pointer group'>
      <div className=" p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
            <div
               className="bg-gradient-to-tr from-green-500 to-green-400 ml-3 md:w-40 md:h-40 w-32 h-32 rounded-xl shadow-2xl shadow-green-400 border-white overflow-hidden border-dashed border-2 flex justify-center items-center">
               <div>
                 <img className='md:w-44 md:h-44 w-32 h-32 object-cover group-hover:scale-110 transition duration-300 ease-in-out' src={getCategoryRice?.image} alt="" />
               </div>
             </div>
             <div>
               <h2 className="text-gray-500 text-sm mt-5 text-start">{getCategoryRice?.category}</h2>
               
               <Link to={getCategoryRice?.category} className="text-sm mt-6 justify-center flex px-4 py-2 bg-green-400 text-white rounded-lg  tracking-wider hover:bg-green-300 outline-none">
               <span className='mx-2'>See All {getCategoryRice?.category}</span> <BsArrowRightShort className='mt-1' />
               </Link>
               
             </div>
             
           </div>
      </div>
    );
};

export default CategoryRice;