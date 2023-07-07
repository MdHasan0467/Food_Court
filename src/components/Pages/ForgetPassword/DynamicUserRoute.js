import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import app from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';



const auth = getAuth(app)

const DynamicUserRoute = () => {
    const user = useLoaderData()
    console.log(user);


    const navigate = useNavigate()


    const [message, setMessage] = useState()




    const handleSubmit = e => {
        e.preventDefault()
        const number = e.target.number.value;
        const email =user?.result?.email
        // console.log(number);

        if(number === user?.result?.number){
            console.log(true);
            sendPasswordResetEmail(auth, email)
            .then(() => {
            setMessage('password reset verification message sent your email successfully')
              toast.info("password reset sent");
            })
            .catch((er) => {
            //   toast.error(er.message);
              console.error(er);
            });
        }
        else{
            navigate('/authentication/forget-password')
            toast.error('Your number not found');
        }
    }
    return (
        <div>
            
            <div className="py-20">
            <h1>Name: {user?.result?.name}</h1>
            <p>Number: ********{user?.result?.number?.slice(-3)}</p>

            <form className='my-10' onSubmit={handleSubmit}>
                <p>Enter your Phone Number</p>
                <input type="text" name="number" placeholder='Phone Number' className='h-12 px-2 rounded-l-lg focus:outline-none' />
                <button type="submit" className='btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 h-12 rounded-none rounded-r-lg'>Send</button>

            </form>
                {
                    message && <p className='text-green-600 '>{message}</p>
                }
            </div>

            <Link className='btn bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 border-0 h-12 flex justify-start w-24' to='/authentication/forget-password'>
            Go Back
            </Link>

        </div>
    );
};

export default DynamicUserRoute;