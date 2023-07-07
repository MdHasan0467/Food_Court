import React, { useEffect, useState } from 'react';
import CategoryChicken from './CategoryChicken';
import CategoryChinese from './CategoryChinese';
import CategoryDrinks from './CategoryDrinks';
import CategoryRice from './CategoryRice';
import CategoryDesert from './CategoryDesert';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css'

const CategoryWiseData = () => {
      
  const [getCategoryDesert, setGetCategoryDesert] = useState()

  const [getCategoryChicken, setGetCategoryChicken] = useState()

  const [getCategoryDrinks, setGetCategoryDrinks] = useState()

  const [getCategoryRice, setGetCategoryRice] = useState()

  const [getCategoryChinese, setGetCategoryChinese] = useState()




        //* Make a request for Chinese Category
          useEffect(() => {
            axios
            .get('https://food-court-server-three.vercel.app/category/Chinese')
            .then((data) => {
              // console.log('Chinese',data);
              if (data.data !== undefined) {
                setGetCategoryChinese(data.data?.result[0]);
              }
            });
                  },[])
           
  
        //* Make a request for Rice Category
        useEffect(() => {
          axios
          .get('https://food-court-server-three.vercel.app/category/Rice')
          .then((data) => {
            // console.log('Rice',data);
            if (data.data !== undefined) {
              // console.log(typeof data.data);
              // console.log(data.data);
              setGetCategoryRice(data.data?.result[0]);
            }
          });
                },[])
           
  
        //* Make a request for Drinks Category
          useEffect(() => {
            axios
            .get('https://food-court-server-three.vercel.app/category/Drinks')
            .then((data) => {
              // console.log('Drinks',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                // console.log(data.data);
                setGetCategoryDrinks(data.data?.result[0]);
              }
            });
                  },[])
           


        //* Make a request for Chicken category
          useEffect(() => {
            axios
            .get('https://food-court-server-three.vercel.app/category/Chicken')
            .then((data) => {
              // console.log('Chicken',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                console.log(data.data.result);
                setGetCategoryChicken(data.data?.result[0]);
              }
            });
                },[])
           
      
 
        //* Make a request for Desert category
          useEffect(() => {
            axios
            .get('https://food-court-server-three.vercel.app/category/Desert')
            .then((data) => {
              console.log('Desert',data);
              if (data.data !== undefined) {
                // console.log(typeof data.data);
                console.log(data.data?.result[0]);
                setGetCategoryDesert(data.data?.result[0]);
              }
            });
                },[])
           
      
                useEffect(() => {
                  Aos.init();
              },[])


              console.log('getCategoryDesert', getCategoryDesert);
    return (
        <div>
          <div  data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
            

            {/*todo: Desert Category */}     
            {getCategoryDesert?.image && 
             <CategoryDesert getCategoryDesert= {getCategoryDesert} />
           }
         
               
            {/*todo: Chinese Category */}     
            {getCategoryChinese?.image && 
             <CategoryChinese getCategoryChinese = {getCategoryChinese} />
           }
         
               
            {/*todo: Chicken Category */}
            {getCategoryChicken?.image &&      
             <CategoryChicken getCategoryChicken = {getCategoryChicken} />
           }
         
               
            {/*todo: Rice Category */}      
            {getCategoryRice?.image &&
             <CategoryRice getCategoryRice = {getCategoryRice} />
           }
         
               
            {/*todo: Drinks Category */}      
            {getCategoryDrinks?.image &&
             <CategoryDrinks getCategoryDrinks = {getCategoryDrinks} />
           }
         
         </div>
        </div>
    );
};

export default CategoryWiseData;