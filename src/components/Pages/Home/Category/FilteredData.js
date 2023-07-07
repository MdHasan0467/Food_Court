import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BsFillBookmarkFill, BsFillBookmarkHeartFill } from 'react-icons/bs';

const FilteredData = ({data}) => {
    
    const {logUser, user} = useContext(AuthContext)

    const navigate = useNavigate()


    const [click, setClick] = useState()



 //? ========== Wish Data ============
    const handleWish = (id) => {
  
    //* Make a request for data with a given ID
      axios
        .get(`https://food-court-server-three.vercel.app/product/${id}`)
        .then((data) => {
        

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


     //* Wishing Data post on database
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
          setClick('active')
          toast.success(`Successfully added your new wish ${data.data.title}`);
        });
          }
          
        });
   
        }
  

  
  //? handleOrder

     const handleOrder = (id) => {
    
    //* Make a request for data with a given ID
      axios
        .get(`https://food-court-server-three.vercel.app/product/${id}`)
        .then((data) => {
          if (data.data !== undefined) {
            console.log(data.data);


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
        <div className=' hover:scale-105 duration-500 cursor-pointer group'>
             <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                    <div>
                      <h2 className="text-gray-900 text-lg font-bold">{data?.title}</h2>
                      <h2 className="text-gray-500 text-sm text-start">{data?.category}</h2>
                      <h3 className="mt-2 text-xl font-bold text-orange-500 text-left">$ {data?.price}</h3>
                      <p className="text-sm font-semibold text-gray-400 text-start">{data?.description}</p>

                      {
                        user?.email ?
                      <button onClick={() => handleOrder(data?._id)} className="text-sm mt-6 px-4 py-2 bg-orange-400 flex justify-start text-white rounded-lg tracking-wider hover:bg-orange-300 outline-none">
                        Buy Now
                      </button>
                      :
                      <p className='text-orange-400 mt-5'>Login to buy this product</p>
                      }
                      
                    </div>
                    <div>
                    <div className="text-2xl flex justify-end mb-2">
                    {
                      user?.email &&
                      <>
                      <BsFillBookmarkFill title='Wish Now' className={click ? "hidden" : "flex text-orange-500"} onClick={() => handleWish(data?._id)} />
                    <BsFillBookmarkHeartFill title='Wish Now' className={click ? "flex text-orange-500" : "hidden"} onClick={() => handleWish(data?._id)} />
                      </>
                    }
                    </div>
                    <div
                      className="bg-gradient-to-tr from-orange-500 to-orange-400 w-32 h-32  rounded-full shadow-2xl shadow-orange-400 border-white overflow-hidden border-dashed border-2  flex justify-center items-center ">
                        
                      <div>
                        <img className='w-32 h-32 object-cover group-hover:scale-110 transition duration-300 ease-in-out' src={data?.image} alt="" />
                      </div>
                    </div>
                    </div>
                    
                  </div>
        </div>
    );
};

export default FilteredData;