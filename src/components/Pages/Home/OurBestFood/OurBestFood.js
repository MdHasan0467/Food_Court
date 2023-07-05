import React, { useEffect, useState } from 'react';
import ShowBestFood from './ShowBestFood';

const OurBestFood = () => {
        
    const [allData, setAllData] = useState()
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      fetch('https://food-court-server-three.vercel.app/all/Products')
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.products?.reverse()?.slice(0,6));
          setAllData(data?.products.slice(0,5));
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);


    if(loading){
        return <p>Loading...</p>
    }
    return (
        <div>
            <h2 className='text-2xl text-gray-500 text-start my-2'>
            Our Best Foods
            </h2>
            <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 w-full mx-auto my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {allData?.map((data, idx) => {
                  return (
                    <ShowBestFood key={idx} data = {data} />
                  );
                })
                }
                </div>
                  
            </div>
        </div>
    );
};

export default OurBestFood;