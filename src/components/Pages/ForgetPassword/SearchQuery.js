import React from "react";
// import Loader from "../../Shared/Loader";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { FaBookReader } from "react-icons/fa";
// import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SearchQuery = ({filteredData}) => {

//   const {loading} = useContext(AuthContext)
 



  console.log(filteredData);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

  return (
    <div>
      <div className="grid lg:grid-cols-3 max-w-screen-xl mx-auto  md:grid-cols-3 grid-cols-1 gap-5">
        {filteredData?.map((value, idx) => (
          <div key={idx}>
            <div className="bg-gradient-to-l hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg">
            <Link to={`/authentication/user/${value?.email}`} className=" shadow-md border text-start">
              <div className=" flex justify-center">
              <img
                className=" h-[150px] w-[150px] rounded-full"
                src={value.image}
                alt="img"
              />
              </div>

              <div className="p-5">

                <p className="font-bold text-xl flex  text-gray-800">
                  <BsFillPersonFill className="mt-1 mr-1" />

                  {value?.name}
                </p>
                
              </div>
            </Link>
            </div>
          </div>
        ))}
      </div>




    </div>
  );
};

export default SearchQuery;
