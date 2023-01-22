import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyWishes = () => {

	const { user, logUser } = useContext(AuthContext);


	const navigate = useNavigate()


	const [wishList, setWishList] = useState()








	//! fetch for getting products data from mongodb.....

	        // Make a request for WishList category
  
       
			useEffect(() => {
				fetch(`http://localhost:5000/my-wish/${user?.email}`)
					.then((res) => res.json())
					.then((result) => {
						setWishList(result);
					});
			}, [user?.email]);
	



			

	
	

	//! ================== Order ==================

			const handleOrder = (id) => {
			  
		 
		  
		  
			  //* Make a request for data with a given ID
			 
				axios
				  .get(`http://localhost:5000/product-wish/${id}`)
					.then((data) => {
					  console.log(data);
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
		  
		  
		  
		  
				//* ================== Data post ==================
		  
				fetch('http://localhost:5000/order-product', {
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
					
				  })
				  .catch(err => toast.error(err.message))
			 
		  
			  
			  
				  }
			
		  
		  
		  
		  
		  
		  
		  
		  
		  




	

    return (

        <div className='min-h-screen'>
       
			{wishList ? 
				<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
				{
					wishList?.map((data) => 
					<div key={data?._id} className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
					<img className='w-full h-80' src={data?.image} alt="img" />
					<div className="card-body">
	
					<div className="flex">
					<h2 className="card-title">{data?.title}</h2>
					<p className='font-semibold text-fuchsia-500 text-2xl'>( ${data?.price} )</p>
					</div>
					<p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
					<p className='border p-2'>{data?.description}</p>
					
					<div className="card-actions justify-end">
					<button onClick={() => handleOrder(data?._id)} className='flex  bg-fuchsia-500 hover:bg-green-500 border-0 btn'> <span className='w-auto my-auto mx-2'><BsFillCartCheckFill/></span> <span>Buy Now</span></button>
					<button className='flex  bg-violet-500 hover:bg-red-500 border-0 btn'> <span className='w-auto my-auto mx-2'><AiOutlineDelete/></span> <span>Delete Wish</span></button>
				  </div>
				</div>
				</div>
					)}
			</div> 
				</div>
			:
			<p>There are no wish list</p>
		}
        </div>
    );
};

export default MyWishes;