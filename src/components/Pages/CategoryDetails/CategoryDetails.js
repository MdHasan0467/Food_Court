import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsFillCartCheckFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const CategoryDetails = () => {

    const gettingData = useLoaderData()


    

     const {logUser} = useContext(AuthContext)







    const [getData, setGetData] = useState()
    // const [wishData, setWishData] = useState()
  
  
  
  
  const navigate = useNavigate()


    // Make a request for data with a given ID


    useEffect(() => {
      axios
        .get(`https://food-court-server-three.vercel.app/products/${gettingData[0]?.category}`)
        .then((data) => {
          if (data.data !== undefined) {
            console.log(data.data);
            setGetData(data.data);
          }
        });
    }, [gettingData[0]?.category]);
  
    



  
  // ! ========== Wish Data ============

  const handleWish = (id) => {
    console.log(id);
    //* Make a request for data with a given ID
   
      axios
        .get(`https://food-court-server-three.vercel.app/product/${id}`)
        .then((data) => {
          console.log('data', data);



          const addedWishList = {
            id: data.data._id,
            name : logUser?.name,
            email: logUser?.email,
            image : data.data.image,
            title : data.data.title,
            price : data.data.price,
            category : data.data.category,
            description: data.data.description,
          }



     //! Wishing Data post on database
      if (data.data) {

       //* Data post 

      fetch('https://food-court-server-three.vercel.app/wish-product', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(addedWishList),
      })
        .then((res) => res.json())
        .then((result) => {
          navigate('/wishes')
          toast.success(`Successfully added your new wish ${data.data.title}`);
        });
          }
          
        });
   

    
    
        }
  




  
  
  //! handleOrder

  const handleOrder = (id) => {
    


    //* Make a request for data with a given ID
   
      axios
        .get(`https://food-court-server-three.vercel.app/product/${id}`)
        .then((data) => {
          if (data.data !== undefined) {
            console.log(data.data);
            // setWishData(data.data);



            const addedOrder = {
              name : logUser?.name,
              email: logUser?.email,
              image : data.data.image,
              title : data.data.title,
              price : data.data.price,
              category : data.data.category,
              description: data.data.description,
            }




      //* Data post 

      fetch('https://food-court-server-three.vercel.app/order-product', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(addedOrder),
      })
        .then((res) => res.json())
        .then((result) => {
          navigate('/orders')
          toast.success(`Successfully added your new order ${data.data.title}`);
        });
          }
          
        });
   

    
    
        }
  











    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {
                getData?.map((data) => 
                <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
                <img className='w-full h-80' src={data?.image} alt="img" />
                <div className="card-body">

                <div className="flex">
                <h2 className="card-title">{data?.title}</h2>
                <p className='font-semibold text-fuchsia-500 text-2xl'>( ${data?.price} )</p>
                </div>
                <p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
                <p className='border p-2'>{data?.description}</p>
                
                {
                  logUser?
                  <div className="card-actions justify-end">
                <button onClick={() => handleOrder(data?._id)} className='flex bg-fuchsia-500 hover:bg-green-500 border-0 w-full btn'> <span className='w-auto my-auto mx-2'><BsFillCartCheckFill/></span> <span>Buy Now</span></button>
                <button onClick={() => handleWish(data?._id)} className='flex bg-violet-500 hover:bg-green-500 border-0 w-full btn'><span className='w-auto my-auto mx-2'><BsFillSuitHeartFill/></span> <span>Add to wish</span></button>
              </div>
              :
              <div className="card-actions justify-end">
                <p className='text-orange-400'>Please login to buy this food</p>
              </div>
                }

            </div>
            </div>
                )}
        </div>

    );
};

export default CategoryDetails;