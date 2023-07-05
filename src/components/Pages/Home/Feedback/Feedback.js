import React, { useContext, useEffect } from 'react';
import Lottie from "lottie-react";
import ReviewAnimation from "../../../../Assets/Animations/ReviewAnimation.json";
import { BsFillStarFill } from 'react-icons/bs';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Feedback = () => {
    const { user, logUser } = useContext(AuthContext);
    
    
      //! Time Adjustment
  const time = String(new Date().toLocaleTimeString());
  const day = String(new Date());

    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = logUser?.name;
        const email = user?.email;
        const image = logUser?.image;
        const message = e.target.message?.value;
        const rate = e.target.rate?.value;
    
        const userReview = {
          email,
          name,
          image,
          message,
          rate,
          time,
          day
        };
        // console.log(userReview);
    
        fetch("https://food-court-server-three.vercel.app/feedback", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userReview),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              console.log(result);
              form.reset();
              window.location.reload(true);
              toast.success("Thanks for your feedback!");
            }
          });
      };

      

      useEffect(() => {
        Aos.init();
    },[])

    return (
        <>
        {
          user?.uid &&
          <div  data-aos="fade-up" className="dark:border-0 px-10 py-10 mx-auto md:grid-cols-2 md:px-12 lg:px-15 lg:m-10 shadow-md dark:shadow-none">
      <div className="container grid grid-cols-1 ms-3 lg:grid-cols-2">
        <div className="text-center lg:text-left p-10 -ml-14 lg:ml-0">
          
          <p
            className="py-2 text-2xl font-bold lg:text-base dark:text-[#DBDBDB]"
           >
            We want to hear form you ! You can share with us what you feel about our services.
          </p>

          <div  data-aos="fade-right">
            <Lottie animationData={ReviewAnimation} loop={true}></Lottie>
          </div>
        </div>
        
          <form  data-aos="fade-left" onSubmit={handleReview} className="card w-full lg:mt-10 p-4 lg:p-8 bg-transparent">
            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-[#00A99D]">Name</label>
              <input
                className="block dark:text-black w-full  px-5 py-3 rounded-md outline-none border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
                readOnly
                defaultValue={logUser?.name}
                type="text"
                name="name"
                id=""
              />
            </div>
            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-[#00A99D]">Email</label>
              <input
                className="block px-5 py-3 shadow-md dark:text-black  w-full  rounded-md outline-none border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
                readOnly
                defaultValue={user?.email}
                type="text"
                name="email"
                id=""
              />
            </div>

            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-[#00A99D]">How was your experience?</label>
              <input name="rate" type="range" min="1" max="5" className="range range-success" step="1" />
              <div className="w-full flex justify-between text-xs px-2">
                <span>
                  <BsFillStarFill className="text-orange-400 dark:text-[#fceb05]" />
                </span>
                <span>
                  <BsFillStarFill className="text-orange-400 dark:text-[#fceb05]" />
                </span>
                <span>
                  <BsFillStarFill className="text-orange-400 dark:text-[#fceb05]" />
                </span>
                <span>
                  <BsFillStarFill className="text-orange-400 dark:text-[#fceb05]" />
                </span>
                <span>
                  <BsFillStarFill className="text-orange-400 dark:text-[#fceb05]" />
                </span>
              </div>
            </div>

            <div className="my-2">
              <label className="flex justify-start mb-3 dark:text-[#00A99D]">Share your feedback</label>
              <textarea
                required
                className="block dark:text-black cursor-pointer w-full p-5 rounded-md border-2  border-[#1AA3D0] dark:border-none focus:outline-none focus:border-[#00A99D]"
                name="message"
                id=""
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <button
              className="cursor-pointer btn w-full border-none transition ease-in-out delay-150  bg-fuchsia-500 hover:bg-green-500 border-0 hover:-translate-y-1 hover:scale-110 duration-300 text-white mt-4"
              type="submit"
            >
              Send Feedback
            </button>
          </form>
       
      </div>
    </div>
        }
        </>
    );
};

export default Feedback;