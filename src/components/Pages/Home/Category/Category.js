import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import SelectCategory from '../../CategoryDetails/SelectCategory/SelectCategory';
import FilteredData from './FilteredData';
import CategoryWiseData from './CategoryWiseData';
import SearchField from './SearchField';
import SearchQuery from './SearchQuery';

const Category = () => {

  const { hasSearched,filteredData, sortedData} = useContext(AuthContext)


  console.log('sortedData', sortedData);
  console.log('filteredData', filteredData);


  const newArray = filteredData.filter(obj1 => {
    return sortedData.some(obj2 => obj2.title === obj1.title && obj2.price === obj1.price && obj2.category === obj1.category);
  });
  
  console.log('newArray', newArray);




  

    return (

      <>


        {/* Search and sorting */}
        <div className="flex justify-between my-5">
        <SelectCategory />
          <SearchField />
        </div>


        <div className='blurEffect text-start pb-10'>


        {/* Sorted Data Load */}
          <>
              {
                newArray && 
                  <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 my-5 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {newArray?.map((data, idx) => {
                  return (
                    <FilteredData key={idx} data = {data} />
                  );
                })
                }
                    </div>
                  
                  </div>
              }
              
          </>


         {/* Searching data load */}
         <>
            {filteredData?.length > 0 && (
                <div id="search">
                  <SearchQuery filteredData={filteredData} />
                </div>
              )}
              
              {hasSearched && filteredData?.length === 0 && (
                <p className='text-center text-2xl'>No results found</p>
            )}
         </>


      {/* Category Wise Data Load */}
      <h2 className='text-2xl text-gray-500 text-start my-2'>
      Products category
      </h2>
      <CategoryWiseData />


    </div>

      </>

    );
};

export default Category;