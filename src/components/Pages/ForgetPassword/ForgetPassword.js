import React, { useEffect, useState } from 'react';
import SearchQuery from './SearchQuery';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

    const [data, setData] = useState([]);

    const [filteredData, setFilteredData] = useState([]);

    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        fetch('https://food-court-server-three.vercel.app/all-users')
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
            item?.email?.toLowerCase().includes(query) 
          );
        });
        setFilteredData(filtered);
        setHasSearched(true);
      }
    
      console.log(filteredData);

      console.log(hasSearched);
    return (
        <div>
            <h1>Forget Password</h1>
            <form className='my-10'>
                <p>Find Your Account By Email</p>
                <input onChange={handleFilter} type="email" name="" placeholder='email' className='h-12 px-2 rounded-l-lg' />
                <button type="submit" className='btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 h-12 rounded-none rounded-r-lg'>Search</button>
            </form>



            <div>


            <div className='my-10'>
              {filteredData.length > 0 && (
                <div id="search">
                  <SearchQuery filteredData={filteredData} />
                </div>
              )}
              {hasSearched && filteredData.length === 0 && (
                <p>No results found.</p>
              )}
            </div>
                


            <Link className='btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 h-12 flex justify-start w-24' to='/login'>
            Go Back
            </Link>


            
            </div>
        </div>
    );
};

export default ForgetPassword;