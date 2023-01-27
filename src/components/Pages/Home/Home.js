import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner'
import Category from './Category/Category';
import Compatible from './Compatible/Compatible';
import TrustedBy from './TrustedBy/TrustedBy';

const Home = () => {
	

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
			<Banner></Banner>
			{
				getCategoryChicken && getCategoryDrinks && getCategoryRice && getCategoryChinese &&
				<Category></Category>
			}
			<TrustedBy></TrustedBy>

			<Compatible></Compatible>


			<Footer></Footer>
			</div>
		);
};

export default Home;