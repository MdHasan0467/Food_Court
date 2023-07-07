import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner/Banner'
import Category from './Category/Category';
import Compatible from './Compatible/Compatible';
import Feedback from './Feedback/Feedback';
import GetFeedback from './GetFeedback/GetFeedback';
// import DuelCard from './DuelCard/DuelCard';
import AllProductsHome from './AllProductsHome/AllProductsHome';
import OurBestFood from './OurBestFood/OurBestFood';
import RecentFood from './RecentFood/RecentFood';

const Home = () => {
	
	
    return (
		    <>
		     	<Banner />
				<Category />
				<RecentFood />
				<OurBestFood />
				<AllProductsHome />
		    	<Feedback />
				<GetFeedback />
				{/* <DuelCard /> */}
			    <Compatible />
			    <Footer />
			</>
		);
};

export default Home;