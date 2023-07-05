import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const ShowAllProducts = ({data}) => {


    const { data: getData, refetch } = useQuery({
        queryKey: ['getData'],
        queryFn: async () => {
            try {
                const res = await fetch('https://food-court-server-three.vercel.app/all/Products');
                const data = await res.json();
                    return data?.products;
            } catch (err) {
                console.error(err);
            }
        },
    })


console.log(getData);


    const handleDelete = value => {



      //! Delete post
      fetch(`https://food-court-server-three.vercel.app/delete/product/${value?._id}`, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch()
              toast.error(`delete successfully!!`);
            }
        });

    }


   
    return (
        <div>

           



            <div className=' hover:scale-105 duration-500 cursor-pointer group'>
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
               <div>
                 <h2 className="text-gray-900 text-lg font-bold">{data?.title.slice(0,11)}</h2>
                 <h2 className="text-gray-500 text-sm text-start">{data?.category}</h2>
                 <h3 className="mt-2 text-xl font-bold text-green-500 text-left">$ {data?.price}</h3>
                 <p className="text-sm font-semibold text-gray-400 text-start">{data?.description.slice(0,11)}</p>
                 
                 <button className="text-sm mt-6 px-4 py-2 bg-green-400 text-white rounded-lg tracking-wider hover:bg-green-300 outline-none">
                   Accept
                 </button>
               </div>
               <div>
               <div className="text-2xl flex justify-end mb-2">
               <BsTrash className='text-red-500' onClick={()=> handleDelete(data)} />
               </div>
               <div
                 className="bg-gradient-to-tr from-green-500 to-green-400 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white overflow-hidden border-dashed border-2  flex justify-center items-center ">
                   
                 <div>
                   <img className='w-32 h-32 object-cover group-hover:scale-110 transition duration-300 ease-in-out' src={data?.image} alt="" />
                 </div>
               </div>
               </div>
               
             </div>
            </div>
        </div>
    );
};

export default ShowAllProducts;