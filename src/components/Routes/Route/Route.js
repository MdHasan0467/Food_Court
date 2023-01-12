import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from '../../../contexts/Private/PrivateRoute';
import About from '../../Pages/About/About';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import FAQ from '../../Pages/FAQ/FAQ';
import Login from '../../Pages/Form/Login/Login';
import Registration from '../../Pages/Form/Registration/Registration';
import Home from '../../Pages/Home/Home';
import Main from '../Layouts/Main/Main';
import Others from '../Layouts/Others/Others';

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
                {
                    path: '/home',
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
                    element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>
                },
                {
                    path: '/add-product',
                    element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
                {
                    path: '/faq',
                    element:<FAQ></FAQ>
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