import React, { useContext, useEffect, useState } from 'react';
import { BsFillBookmarkFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ShowRecentFood = ({data}) => {
        
    const {logUser} = useContext(AuthContext)

    const navigate = useNavigate()


    const [click, setClick] = useState()



 //? ========== Wish Data ============
    const handleWish = (value) => {
  console.log(value);
    //* Make a request for data with a given ID
      axios
        .get(`https://food-court-server-three.vercel.app/product/${value?._id}`)
        .then((data) => {
        

          const addedWishList = {
            id:value._id,
            name : logUser?.name,
            email: logUser?.email,
            image : value?.image,
            title : value?.title,
            price : value?.price,
            category : value?.category,
            description: value?.description,
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
     const handleOrder = (value) => {
    
    //* Make a request for data with a given ID
      axios
        .get(`https://food-court-server-three.vercel.app/product/${value?._id}`)
        .then((data) => {
          if (data.data !== undefined) {
            console.log(data.data);


            const addedOrder = {
              name : logUser?.name,
              email: logUser?.email,
              image : value?.image,
              title : value?.title,
              price : value?.price,
              category : value?.category,
              description: value?.description,
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
  


        useEffect(() => {
          Aos.init();
      },[])





    return (
        <div  data-aos="fade-up" className=' hover:scale-105 duration-500 cursor-pointer group'>
        <div className=" p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div className='flex justify-between'>
              <div
                 className="bg-gradient-to-tr from-cyan-500 to-cyan-400 md:w-36 md:h-36 w-32 h-32 rounded-full shadow-2xl shadow-cyan-400 border-white overflow-hidden border-dashed border-2  flex justify-center items-center ">
                 <div>
                   <img className='md:w-40 md:h-40 w-32 h-32 object-cover group-hover:scale-110 transition duration-300 ease-in-out' src={data?.image} alt="" />
                 </div>
               </div>

               <div className="text-2xl flex justify-end mb-2">
               <BsFillBookmarkFill className={click ? "hidden" : "flex text-cyan-500"} onClick={() => handleWish(data)} />
               <BsFillBookmarkHeartFill className={click ? "flex text-cyan-500" : "hidden"} onClick={() => handleWish(data)} />
               </div>
              </div>
               
               <div>
                 <h2 className="text-gray-900 text-lg text-start mt-3 font-bold">{data?.title.slice(0,20)}</h2>
                 <h2 className="text-gray-500 text-sm text-start">{data?.category}</h2>
                 
                <button onClick={() => handleOrder(data)} className="text-sm mt-6 justify-center flex px-4 py-2 bg-cyan-400 text-white rounded-lg w-full tracking-wider hover:bg-cyan-300 outline-none">
                 Buy Now
                 </button>
                 
               </div>
               
             </div>
        </div>
    );
};

export default ShowRecentFood;