import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='blurEffect text-start py-10'>
            <div className="flex justify-center">
                
                
            <div className="card h-[600px] w-96 mx-5 group bg-base-100 shadow-xl">
            <img className='w-full h-96' src="nodoles1.jpg" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">Noodles</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to='/category-details'>
                <button className="text-4xl text-violet-700  hidden group-hover:flex">
                <BsArrowRightShort></BsArrowRightShort>
                </button>
                </Link>
              </div>
            </div>
          </div>
                



                
            <div className="card h-[600px] w-96 mx-5 group bg-base-100 shadow-xl">
             <img className='w-full h-96' src="nodoles2.jpg" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">Noodles</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to='/category-details'>
                <button className="text-4xl text-violet-700  hidden group-hover:flex">
                <BsArrowRightShort></BsArrowRightShort>
                </button>
                </Link>
              </div>
            </div>
          </div>
                



                
            <div className="card h-[600px] w-96 mx-5 group bg-base-100 shadow-xl">
            <img className='w-full h-96' src="nodoles3.jpg" alt="Shoes" />
            <div className="card-body">
              <h2 className="card-title">Noodles</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to='/category-details'>
                <button className="text-4xl text-violet-700  hidden group-hover:flex">
                <BsArrowRightShort></BsArrowRightShort>
                </button>
                </Link>
              </div>
            </div>
          </div>
                



                
            </div>
        </div>
    );
};

export default Category;