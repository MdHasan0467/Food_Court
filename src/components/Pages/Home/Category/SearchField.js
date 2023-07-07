import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const SearchField = () => {
    const { setFilteredData,  setHasSearched } = useContext(AuthContext);


    const [data, setData] = useState([]);


  
      useEffect(() => {
        fetch(`https://food-court-server-three.vercel.app/category/all`)
          .then((res) => res.json())
          .then((data) => setData(data?.result))
          .finally(() => {});
      }, []);



      //! Data Query
      function handleFilter(event) {
        const query = event.target.value.toLowerCase();
        console.log(query);
        // console.log(data);
        const filtered = data?.filter((item) => {
          return (
            item?.title?.toLowerCase().includes(query) ||
            item?.category?.toLowerCase().includes(query) ||
            item?.description?.toLowerCase().includes(query) ||
            item?.price?.toLowerCase().includes(query)
          );
        });
        setFilteredData(filtered);
        setHasSearched(true);
      }


    return (
        <div>
          <p className='text-start ml-10'>Search any...</p>
            <div
              id="searchBox"
              className="px-4 flex flex-col sm:flex-row justify-center items-start sm:items-center dark:rounded-b-lg"
            >
              <input
                placeholder="Search your food..."
                type="text"
                className="text-black h-12 p-5 focus:outline-none focus:border-0 rounded-full md:rounded-r-none"
                onChange={handleFilter}
              />
              <button className="btn hidden md:flex bg-indigo-400 hover:bg-indigo-500 border-0 rounded-r-full h-10 text-xl">
                Search
              </button>
            </div>
        </div>
    );
};

export default SearchField;