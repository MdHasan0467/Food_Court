import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const SelectCategory = () => {

  const { setFilteredData } = useContext(AuthContext)
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



   //! Sorting START ----
  //* Extract the "location" property from each object and create a new array
  const namesArray = products?.map((data) => data?.category);

  //* To map an array in JSX while displaying one value just one time
  const uniqueItems = [...new Set(namesArray)];

  //! Sort by their location and department
  function handleFilter(event) {
    const query = event?.target?.value?.toLowerCase();
    // console.log(query);
    // console.log(data);
    const filtered = products?.filter((item) => {
      return (
        item?.category?.toLowerCase().includes(query)
      );
    });
    setFilteredData(filtered);
    console.log(filtered);
  }


 

    return (
        <div>
        <select onChange={handleFilter} name="category" className="select select-primary w-full max-w-xs">
        <option disabled selected>Select your food category</option>
           {uniqueItems?.map((data, idx) => (
            <option key={idx}>{data}</option>
              ))}
      </select>
        </div>
    );
};

export default SelectCategory;