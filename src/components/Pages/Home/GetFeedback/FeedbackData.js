import Aos from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const FeedbackData = ({data,setModalData}) => {

  useEffect(() => {
    Aos.init();
},[])

    return (
        <div data-aos="fade-up" className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-3">
            {data?.slice(0,3)?.map((feedback, idx) => (
              <blockquote key={idx} className="card-body">
                <header className="sm:flex sm:items-center sm:gap-4">
                  <img
                    alt=""
                    className="self-center ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-12 h-12 mx-3 bg-center bg-cover rounded-full "
                    src={feedback?.image}
                  />
                  <p className="text-start">
                    <span className="text-s block text-gray-500 dark:text-[#F0F5FF]">
                      {feedback?.name}
                    </span>
                    
                    <span className="text-s font-bold block text-[#00A99D] dark:text-[#00A99D]">
                     {feedback?.time}
                    </span>
                    <span className="text-s font-bold block text-[#00A99D] dark:text-[#00A99D]">
                     {feedback?.day?.slice(0,15)}
                    </span>
                  </p>

                  {/* <p className="mt-2 font-medium sm:mt-0">The best thing money can buy!</p> */}
                </header>

                <p className="mt-2 text-gray-700 dark:text-[#DBDBDB]">
                  {feedback?.message.slice(0, 50)}
                  {feedback?.message.length >= 51 && <span>. . .</span>}

                  {feedback?.message.length >= 51 && (
                    <label
                      onClick={() => setModalData(feedback)}
                      htmlFor="TestimonialModal"
                      className="cursor-pointer font-bold text-[#00A99D]"
                    >
                      see more
                    </label>
                  )}
                </p>

                <footer className="my-1 flex">
                  <div className="flex dark:text-yellow-400">
                    {feedback?.rate === 1 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 2 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 3 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 4 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill className="text-gray-300 dark:text-white " />
                      </>
                    )}
                    {feedback?.rate === 5 && (
                      <>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </>
                    )}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
    );
};

export default FeedbackData;