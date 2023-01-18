import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {

    const gettingData = useLoaderData()
    console.log('data', gettingData);



    // console.log('details')








    // const [getData, setGetData] = useState()


    // Make a request for data with a given ID


    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:5000/products/${getData?.category}`)
    //     .then((data) => {
    //       if (data.data !== undefined) {
    //         console.log(typeof data.data);
    //         console.log(data.data);
    //         setGetData(data.data);
    //       }
    //     });
    // }, [getData?.category]);
  
    















    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {
            gettingData?.map((data) => <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
            <img className='w-full h-80' src={data?.image} alt="img" />
            <div className="card-body">
                <h2 className="card-title">{data?.title}</h2>
                <p>Category: {data?.category}</p>
                <p className='border p-2'>{data?.description}</p>
                <p>${data?.price}</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
            </div>
                )}
        </div>

    );
};

export default CategoryDetails;