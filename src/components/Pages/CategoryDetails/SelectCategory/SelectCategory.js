import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const SelectCategory = () => {

  const { setSortedData,setSortedPriceData, setHasSearched } = useContext(AuthContext)

  const [products, setProducts] = useState([]);


  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://food-court-server-three.vercel.app/category/all`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.result)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


console.log(products);



// ?========[Category Sorting]================

  //* Extract the "location" property from each object and create a new array
  const namesArray = products?.map((data) => data?.category);

  //* To map an array in JSX while displaying one value just one time
  const uniqueItems = [...new Set(namesArray)];


  //!* Sort by their category
  function handleFilter(event) {
    const query = event?.target?.value?.toLowerCase();
    // console.log(query);
    // console.log(data);
    const filtered = products?.filter((item) => {
      return (
        item?.category?.toLowerCase().includes(query)
      );
    });
    setSortedData(filtered);
    setHasSearched(true);
    console.log(filtered);
  }

//! End category sorting






// ?========[Price Sorting]================

  const pricesArray = products?.map((data) => data?.price);

  //* To map an array in JSX while displaying one value just one time
  const uniqueItemsPrice = [...new Set(pricesArray)];

//*: For Ascending array values
  uniqueItemsPrice.sort(function(a, b) {
    return a - b;
  });


  //!* Sort by their price 
  function handlePriceFilter(event) {
    const query = event?.target?.value?.toLowerCase();
    // console.log(query);
    // console.log(data);
    const filtered = products?.filter((item) => {
      return (
        item?.price?.toLowerCase().includes(query)
      );
    });
    setSortedPriceData(filtered);

    console.log(filtered);
  }

//! End price sorting

 

    return (
        <div>
          <p className='text-start'>Sort category and price wise</p>
          <div className='flex'>

            <select onChange={handleFilter} name="category" className="select select-primary">
            <option disabled selected>Food category</option>
              {uniqueItems?.map((data, idx) => (
                <option key={idx}>{data}</option>
                  ))}
            </select>

            <select onChange={handlePriceFilter} name="category" className="select select-primary mx-2">
            <option disabled selected>Price</option>
              {uniqueItemsPrice?.map((data, idx) => (
                <option key={idx}>{data}</option>
                  ))}
            </select>

            </div>
        </div>
    );
};

export default SelectCategory;