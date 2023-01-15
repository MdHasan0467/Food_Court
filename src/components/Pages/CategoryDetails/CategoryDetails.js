import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CategoryDetails = () => {









    const [getData, setGetData] = useState()


    // Make a request for data with a given ID


    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:5000/products/${getData?.category}`)
    //     .then((data) => {
    //       if (data.data !== undefined) {
    //         console.log(typeof data.data);
    //         console.log(data.data);
    //         setGetData(data.data);
    //       }
    //     });
    // }, [getData?.category]);
  
    















    return (
        
        <div>
            <h1>Category Details</h1>
    </div>

    );
};

export default CategoryDetails;