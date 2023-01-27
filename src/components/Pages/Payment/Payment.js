import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
    const  data  = useLoaderData();
    console.log(data)
    return (
        <div className='m-10'>

            <div className="my-2">
            <h3 className='text-start text-3xl'>Payment for {data.title}</h3>
            <h3 className='text-start text-xl'>Please pay <strong>${data.price}</strong></h3>
            </div>

            <div className='w-1/3 mt-20'>
            <p className='text-start text-md my-5'>Give your valid card number</p>
            <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
            </div>
        </div>
    );
};

export default Payment;