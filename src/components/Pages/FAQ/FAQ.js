import React from 'react';
import FAQBanner from './FAQBanner';





const FAQ = () => {
    return (
      <div className='bg-base-300 min-h-screen'>
        <div className="img">
        <FAQBanner></FAQBanner>
        </div>
        <div className="w-4/6 mx-auto my-10">
          
          {/* 1st */}
        <div className="collapse border rounded-xl">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        What is FoodCourt?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>FoodCourt is an on-demand convenience app that lets you order from a curation of the best food delivery brands & shops. Now you can order jollof rice, a burger, pounded yam & a bottle of wine all in a single order!</p>
        </div>
        </div>
          
          {/* 2nd */}
        <div className="collapse border rounded-xl">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        How do I order?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>Once you download FoodCourt, you can place an order by simply tapping on the restaurant of your choice, selecting an item and clicking “Add to Basket” for Food. For Shop, simply visit the shop section on your bottom nav bar, then click on the blue + button to add items to your cart. Click “View Basket” to complete your order.</p>
        </div>
        </div>
          
          {/* 3rd */}
        <div className="collapse border rounded-xl">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Can I order from different restaurants?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>YES! With FoodCourt you can order all your favorite dishes, snacks & more across brands, in a single basket.</p>
        </div>
        </div>
          
          {/* 4th */}
        <div className="collapse border rounded-xl">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        How do I top up my wallet?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>You can top up your wallet by visiting the “Wallet” page. This page can be found in your menu page at the top right corner. You can add to your wallet by simply selecting the amount you want to add then paying with a new or saved bank card.</p>
        </div>
        </div>
          
          {/* 5th */}
        <div className="collapse border rounded-xl">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        Can I earn on FoodCourt?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>You can earn credit in your wallet by sharing your referral code with your friends and family. Sharing your referral code gives them 10% off when they spend up to N2,000 & gives you N200 every time a new user uses your code!</p>
        </div>
        </div>
          
          {/* 6th */}
        <div className="collapse border rounded-xl">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        What is the delivery fee?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>The delivery fee is determined by the distance between you & the restaurant. Our delivery fees currently go from 390 – 850 naira & may increase as much as 1.5x during a surge. Surges are caused by irregular factors like heavy traffic, heavy rainfall, fuel scarcity, high order volumes at the restaurant, etc.</p>
        </div>
        </div>
          
        </div>
        </div>
    );
};

export default FAQ;