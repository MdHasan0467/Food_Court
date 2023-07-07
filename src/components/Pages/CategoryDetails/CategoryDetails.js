import axios from 'axios';
import React, { useContext, useState } from 'react';
import { BsFillBookmarkFill, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const CategoryDetails = () => {

    const gettingData = useLoaderData()


    console.log(gettingData?.result);

     const {logUser,user} = useContext(AuthContext)







    // const [getData, setGetData] = useState()
    // const [wishData, setWishData] = useState()
  
  
  
  
  const navigate = useNavigate()


    // Make a request for data with a given ID


    // useEffect(() => {
    //   axios
    //     .get(`https://food-court-server-three.vercel.app/products/${gettingData[0]?.category}`)
    //     .then((data) => {
    //       if (data.result !== undefined) {
    //         console.log(data.result);
    //         setGetData(data.result);
    //       }
    //     });
    // }, [gettingData[0]?.category]);
  
    const [click, setClick] = useState()



  
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
          setClick('active')
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
                gettingData?.result?.map((data) => 
                <div className=" p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
              <div className='flex justify-between'>
              <div
                 className="bg-gradient-to-tr from-orange-500 to-orange-400 md:w-80 md:h-60 w-32 h-32 rounded-xl shadow-2xl shadow-orange-400 border-white overflow-hidden border-dashed border-2  flex justify-center items-center ">
                 <div>
                   <img className='md:w-96 md:h-72 w-32 h-32 object-cover group-hover:scale-110 transition duration-300 ease-in-out' src={data?.image} alt="" />
                 </div>
               </div>

               <div className="text-2xl flex justify-end mb-2">
               
               {
                user?.email ?
                <>
                <BsFillBookmarkFill title='Wish Now' className={click ? "hidden" : "flex text-orange-500"} onClick={() => handleWish(data)} />
               <BsFillBookmarkHeartFill title='Wish Now' className={click ? "flex text-orange-500" : "hidden"} onClick={() => handleWish(data)} />
                </>
                :
                <></>
               }
               </div>
              </div>
               
               <div>
                 <h2 className="text-gray-900 text-lg text-start mt-3 font-bold">{data?.title}</h2>
                 <h2 className="text-orange-400 text-md text-start font-semibold">${data?.price}</h2>
                 <h2 className="text-gray-500 text-sm text-start">{data?.category}</h2>
                 
                {
                  user?.email ?
                  <button onClick={() => handleOrder(data?._id)} className="text-sm mt-6 justify-center flex px-4 py-2 bg-orange-400 text-white rounded-lg w-full tracking-wider hover:bg-orange-300 outline-none">
                 Buy Now
                 </button>
                 :
                  <Link to = "/authentication/login" className='text-orange-400 mt-10 hover:text-blue-500'>
                    Login to buy this product
                  </Link>
                }
                 
               </div>
               
            </div>
                )}
        </div>

    );
};

export default CategoryDetails;