import Aos from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react';
import { BsArrowRightShort, BsFillStarFill } from 'react-icons/bs';

const ShowAllFeedbackData = ({data, setModalData}) => {


   
  // By Clicking see all button display all categories data and by clicking close button hidden all categories data

  const [, setCategoryData] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const getCategoryData = async () => {
    const response = await fetch(
      "https://food-court-server-three.vercel.app/feedback"
    );
    const data = await response.json();
    setCategoryData(data);
  };

  // console.log("all", categoryData);

  const handleShowAllClick = () => {
    setShowAll(true);
    getCategoryData();
  };

  const handleCloseClick = () => {
    setShowAll(false);
    setCategoryData([]);
  };


  useEffect(() => {
    Aos.init();
},[])

    return (
        <div data-aos="fade-up" className="my-10">
            {showAll ? (
              <div>
                <div data-aos="fade-up" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                  {data?.slice(3)?.map((feedback, idx) => (
                    <blockquote key={idx} className="card-body">
                      <header className="sm:flex sm:items-center sm:gap-4">
                        <img
                          alt=""
                          className="self-center ring ring-green-800 ring-offset-base-100 ring-offset-2 flex-shrink-0 w-12 h-12 mx-3 bg-center bg-cover rounded-full "
                          src={feedback?.image}
                        />
                        <p className="text-start">
                          <span className="text-xs block text-gray-500 dark:text-gray-200">
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
                            className="cursor-pointer text-[#00A99D] dark:text-[#00A99D] font-bold"
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

                <button
                  className="hover:underline group text-[#00A99D] dark:text-[#00A99D] text-2xl flex mx-auto w-sm mt-10"
                  title="Hide"
                  onClick={handleCloseClick}
                >
                  Close
                  <BsArrowRightShort className="group-hover:text-[#1AA3D0] dark:group-hover:text-white text-white mt-2" />
                </button>
              </div>
            ) : (
              <button
                className="hover:underline group text-[#1AA3D0] dark:text-[#1AA3D0] font-bold text-2xl flex mx-auto w-sm mb-4 lg:mb-0"
                title="See all"
                onClick={handleShowAllClick}
              >
                See All Reviews
                <BsArrowRightShort className="group-hover:text-[#1AA3D0] dark:group-hover:text-[#1AA3D0] text-[#00A99D] mt-2" />
              </button>
            )}
          </div>
    );
};

export default ShowAllFeedbackData;