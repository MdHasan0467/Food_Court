import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../../Pages/About/About';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import Login from '../../Pages/Form/Login/Login';
import Registration from '../../Pages/Form/Registration/Registration';
import Home from '../../Pages/Home/Home';
import Main from '../Main/Main';
import Others from '../Others/Others';

const Route = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element:<Home></Home>
                },
                
            ]
        },
        {
            path:'/',
            element: <Others></Others>,
            children: [
               
                {
                    path: '/category-details',
                    element:<CategoryDetails></CategoryDetails>
                },
                {
                    path: '/add-product',
                    element:<AddProduct></AddProduct>
                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/register',
                    element:<Registration></Registration>
                },
                {
                    path: '/about',
                    element:<About></About>
                },
            ]
        },
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;