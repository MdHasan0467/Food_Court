import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import SelectCategory from '../../CategoryDetails/SelectCategory/SelectCategory';
// import Loader from '../../../Shared/Loader/Loader';
// import CategoryDetails from '../../CategoryDetails/CategoryDetails';

const Category = () => {



  const {loading} = useContext(AuthContext)




  

  const [getCategory, setGetCategory] = useState()







  const [getCategoryChicken, setGetCategoryChicken] = useState()





  const [getCategoryDrinks, setGetCategoryDrinks] = useState()





  const [getCategoryRice, setGetCategoryRice] = useState()





  const [getCategoryChinese, setGetCategoryChinese] = useState()












        // Make a request for Chinese Category
  
       
          useEffect(() => {
            axios
            .get('http://localhost:7000/category/Chinese')
            .then((data) => {
              console.log('Chinese',data);
              if (data.data !== undefined) {
                setGetCategoryChinese(data.data[0]);
              }
            });
                  },[])
           
      
        


  
  
  
  
  
  

  
  
        // Make a request for Rice Category
  
       
        useEffect(() => {
          axios
          .get('http://localhost:7000/category/Rice')
          .then((data) => {
            console.log('Rice',data);
            if (data.data !== undefined) {
              // console.log(typeof data.data);
              // console.log(data.data);
              setGetCategoryRice(data.data[0]);
            }
          });
                },[])
           
      
        


  
  
  
  
  
  

  
  
        // Make a request for Drinks Category
  
  
          useEffect(() => {
            axios
            .get('http://localhost:7000/category/Drinks')
            .then((data) => {
              console.log('Drinks',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategoryDrinks(data.data[0]);
              }
            });
                  },[])
                
  
  
  
  
  
  
           
      
        


  
  
  
  
  
  

  
  
        // Make a request for Chicken category
  
       
          useEffect(() => {
            axios
            .get('http://localhost:7000/category/Chicken')
            .then((data) => {
              console.log('Chicken',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategoryChicken(data.data[0]);
              }
            });
                },[])
           
      
        



      
        

 




    return (

      <div>

        <div className="flex justify-between my-5">
        <h2 className='text-2xl text-gray-800 text-start mx-6 my-2'>Products category</h2>
        <SelectCategory />
        </div>
        <div className='blurEffect text-start pb-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            
            

            



           

    

         {/* Chinese Category */}      
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryChinese?.image} alt="img" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryChinese?.title}</p> <p>${getCategoryChinese?.price}</p></h2>
              <p>Category: {getCategoryChinese?.category}</p>
              <p className='border p-2'>{getCategoryChinese?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryChinese?.category}>
              <button title='See details' className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
      
    
    

            
         {/* Chicken Category */}      
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryChicken?.image} alt="img" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryChicken?.title}</p> <p>${getCategoryChicken?.price}</p></h2>
              <p>Category: {getCategoryChicken?.category}</p>
              <p className='border p-2'>{getCategoryChicken?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryChicken?.category}>
              <button title='See details' className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
      
    
    

            
         {/* Rice Category */}      
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryRice?.image} alt="img" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryRice?.title}</p> <p>${getCategoryRice?.price}</p></h2>
              <p>Category: {getCategoryRice?.category}</p>
              <p className='border p-2'>{getCategoryRice?.description}</p>
             
            <div className="card-actions justify-end">
              <Link to={getCategoryRice?.category}>
              <button title='See details' className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
      
    
    

            
         {/* Drinks Category */}      
          <div className="card h-[600px]  mx-5 group bg-base-100 shadow-xl">
          <img className='w-full h-80' src={getCategoryDrinks?.image} alt="img" />
          <div className="card-body">
              <h2 className="card-title flex justify-between"> <p>{getCategoryDrinks?.title}</p> <p>${getCategoryDrinks?.price}</p></h2>
              <p>Category: {getCategoryDrinks?.category}</p>
              <p className='border p-2'>{getCategoryDrinks?.description}</p>
              
            <div className="card-actions justify-end">
              <Link to={getCategoryDrinks?.category}>
              <button title='See details' className="text-4xl text-white   group-hover:text-violet-700">
              <BsArrowRightShort></BsArrowRightShort>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
      
    
    

            




      


            
        </div>
    </div>
      </div>

    );
};

export default Category;