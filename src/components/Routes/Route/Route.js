import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from '../../../contexts/Private/PrivateRoute';
import About from '../../Pages/About/About';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import AdminDetails from '../../Pages/Dashboard/AdminDetails/AdminDetails';
import Profile from '../../Pages/Dashboard/Profile/Profile';
import UpdateFoodCourt from '../../Pages/Dashboard/UpdateFoodCourt/UpdateFoodCourt';
import FAQ from '../../Pages/FAQ/FAQ';
import Login from '../../Pages/Form/Login/Login';
import Registration from '../../Pages/Form/Registration/Registration';
import Home from '../../Pages/Home/Home';
import MyOrders from '../../Pages/MyOrders/MyOrders';
import MyWishes from '../../Pages/MyWishes/MyWishes';
import Payment from '../../Pages/Payment/Payment';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import DashboardWelcome from '../Layouts/Dashboard/DashboardWelcome/DashboardWelcome';
import Main from '../Layouts/Main/Main';
import Others from '../Layouts/Others/Others';

const Route = () => {
    const router = createBrowserRouter([
        {
            path:'/', element: <Main></Main>,
            children: [
                {
                    path: '/',  element:<Home></Home>
                },
                {
                    path: '/home',  element:<Home></Home>
                },
                
            ]
        },












        {
            path:'/',  element: <Others></Others>,
            children: [
            
               
                {
                    path: '/:category',  element: <CategoryDetails></CategoryDetails>,
                    loader: ({ params }) => fetch(`http://localhost:7000/category/${params.category}`)
                },
                
                {
                    path: '/about',  element:<About></About>
                },
                {
                    path: '/faq',  element:<FAQ></FAQ>
                },
                {
                    path: '/orders',  element:<MyOrders></MyOrders>
                },
                {
                    path: '/wishes',  element:<MyWishes></MyWishes>
                },
                {
                    path: '/orders/payment/:id', element: <Payment></Payment>,
                    loader: ({params}) => fetch(`http://localhost:7000/orders/${params.id}`)
                },
                


            ]
        },














        {
            path:'/dashboard',  element: <Dashboard></Dashboard>,
            children: [
            
               
                
                {
                    path: '/dashboard',   element:<DashboardWelcome></DashboardWelcome>
                },
                {
                    path: '/dashboard/user-profile',   element:<Profile></Profile>
                },
                {
                    path: '/dashboard/admin-details',  element: <AdminDetails></AdminDetails>
                },
                {
                    path: '/dashboard/orders',  element:<MyOrders></MyOrders>
                },
                {
                    path: '/dashboard/wishes',  element:<MyWishes></MyWishes>
                },
                {
                    path: '/dashboard/update-food-court',  element:<UpdateFoodCourt></UpdateFoodCourt>
                },
                {
                    path: '/dashboard/orders/payment/:id', element: <Payment></Payment>,
                    loader: ({params}) => fetch(`http://localhost:7000/orders/${params.id}`)
                },
                {
                    path: '/dashboard/add-product',   element:<AddProduct></AddProduct>
                },

            ]
        },













        {
            path: '/login',  element:<Login></Login>
        },
        {
            path: '/register',   element:<Registration></Registration>
        },



    ])




    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;