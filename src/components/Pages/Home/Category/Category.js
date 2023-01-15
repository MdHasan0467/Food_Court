import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import CategoryDetails from '../../CategoryDetails/CategoryDetails';

const Category = () => {



  const {loading} = useContext(AuthContext)



  const [getData, setGetData] = useState()





  const [getCategory, setGetCategory] = useState()


        // Make a request for data with a given ID
  
  
        useEffect(() => {
          axios
            .get('http://localhost:5000/products')
            .then((data) => {
              if (data.data !== undefined) {
                console.log(typeof data.data);
                console.log(data.data);
                setGetData(data.data);
              }
            });
        }, []);
      
        

  
  
  
  
  
  

  
  



  
  const handleCategory = id => {
    alert(id)
    setGetCategory(id)
  }



 




    return (

      <div>
        <h2 className='text-2xl text-gray-800'>Category</h2>
        <div className='blurEffect text-start py-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            
            

            



      {
        getData?.map(data =>
      
          <div key={data?._id} className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={data?.image} alt="img" />
          <div className="card-body">
              <h2 className="card-title">{data?.title}</h2>
              <p>Category: {data?.category}</p>
              <p className='border p-2'>{data?.description}</p>
              <p>${data?.price}</p>
            <div className="card-actions justify-end">
              <Link to={data?.category}>
              <button onClick={() => handleCategory(data?.category)} className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        )
     }

            




      


            
        </div>
    </div>
      </div>

    );
};

export default Category;