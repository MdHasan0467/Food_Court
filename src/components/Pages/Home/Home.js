import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner'
import Category from './Category/Category';
import Compatible from './Compatible/Compatible';
import TrustedBy from './TrustedBy/TrustedBy';

const Home = () => {
	
    return (
		<div>
			<Banner></Banner>
			
			<Category></Category>

			<TrustedBy></TrustedBy>

			<Compatible></Compatible>


			<Footer></Footer>
			</div>
		);
};

export default Home;