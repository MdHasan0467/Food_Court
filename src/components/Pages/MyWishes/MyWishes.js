import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css'



const MyWishes = () => {

	const { user, logUser } = useContext(AuthContext);


	const navigate = useNavigate()


	// const [wishList, setWishList] = useState()








	//! fetch for getting products data from mongodb.....
    const { data: wishList, refetch } = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://food-court-server-three.vercel.app/my-wish/${user?.email}`);
                const data = await res.json();
                    return data?.result;
            } catch (err) {
                console.error(err);
            }
        },
    })

console.log(wishList);

	        // Make a request for WishList category
  
       
			// useEffect(() => {
			// 	fetch(`https://food-court-server-three.vercel.app/my-wish/${user?.email}`)
			// 		.then((res) => res.json())
			// 		.then((result) => {
			// 			setWishList(result);
			// 		});
			// }, [user?.email]);
	




			const handleDelete = value => {


				//! Delete post
				fetch(`https://food-court-server-three.vercel.app/delete/wishProduct/${value?._id}`, {
				  method: 'DELETE',
			  })
				  .then((res) => res.json())
				  .then((data) => {
					  console.log(data);
					//   if (data.deletedCount > 0) {
						  toast.error(`delete successfully!!`);
						  refetch()
					//   }
				  });
		  
			  }

			

	
	

	//! ================== Order ==================

			const handleOrder = (data) => {

				console.log(data);
				
				const addedOrder = {
					name : logUser?.name,
					email: logUser?.email,
					image : data?.image,
					title : data?.title,
					price : data?.price,
					category : data?.category,
					description: data?.description,
				}
  
  
  console.log(addedOrder);
  
		//* ================== Data post ==================
  
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
			toast.success(`Successfully added your new order ${data?.title}`);
		  });
			 
		  
			  
			  
				  }
			
		  
		  
	
		  
		  console.log(wishList);


		  useEffect(() => {
			Aos.init();
		},[])

	

    return (

        <div className='min-h-screen'>
       
			{wishList && 
				<div className="flex justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
				{
					wishList?.map((data) => 
					<div  data-aos="fade-up" key={data?._id} className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
					<img className='w-full h-80' src={data?.image} alt="img" />
					<div className="card-body">
	
					<div className="flex">
					<h2 className="card-title">{data?.title}</h2>
					<p className='font-semibold text-fuchsia-500 text-2xl'>( ${data?.price} )</p>
					</div>
					<p className='text-start'> <span className='font-semibold'>Category:</span> {data?.category}</p>
					<p className='border p-2'>{data?.description}</p>
					
					<div className="card-actions justify-end">

					<button onClick={() => handleOrder(data)} className='flex  bg-fuchsia-500 hover:bg-green-500 border-0 btn'>
						 <span className='w-auto my-auto mx-2'><BsFillCartCheckFill/></span> <span>Buy Now</span>
					</button>

					<button onClick={() => handleDelete(data)} className='flex  bg-violet-500 hover:bg-red-500 border-0 btn'> 
					<span className='w-auto my-auto mx-2'><AiOutlineDelete/></span> 
					<span>Delete Wish</span>
					</button>

				  </div>

				</div>
				</div>
					)}
			</div> 
				</div>
			
			}
			{wishList === undefined &&
				<p>There are no wish list available</p>
			}
        </div>
    );
};

export default MyWishes;