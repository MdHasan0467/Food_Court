import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Main from '../Main/Main';

const Route = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element:<Home></Home>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;