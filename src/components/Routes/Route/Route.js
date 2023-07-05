import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import AllProducts from '../../Pages/Dashboard/AllProducts/AllProducts';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import ForgetPassword from '../../Pages/ForgetPassword/ForgetPassword';
import DynamicUserRoute from '../../Pages/ForgetPassword/DynamicUserRoute';

const Route = () => {
    const router = createBrowserRouter(
        [

        {
            path:'/', element: <Main></Main>,
            children: 
            [
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
                    loader: ({ params }) => fetch(`https://food-court-server-three.vercel.app/category/${params.category}`)
                },
                
                {
                    path: '/about',  element:<About />
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
                    loader: ({params}) => fetch(`https://food-court-server-three.vercel.app/orders/${params.id}`)
                },
                


            ]
        },





        {
            path: '/user/:email',  element: <DynamicUserRoute />,
            loader: ({ params }) => fetch(`https://food-court-server-three.vercel.app/user/${params.email}`)
        },








        // * Dashboard
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
                    path: '/dashboard/all-products',  element: <AllProducts />
                },
                {
                    path: '/dashboard/orders',  element:<MyOrders></MyOrders>
                },
                {
                    path: '/dashboard/wishes',  element:<MyWishes></MyWishes>
                },
                {
                    path: '/dashboard/My-Products',  element:<MyProducts />
                },
                {
                    path: '/dashboard/update-food-court',  element:<UpdateFoodCourt></UpdateFoodCourt>
                },
                {
                    path: '/dashboard/orders/payment/:id', element: <Payment></Payment>,
                    loader: ({params}) => fetch(`https://food-court-server-three.vercel.app/orders/${params.id}`)
                },
                {
                    path: '/dashboard/add-product',   element:<AddProduct></AddProduct>
                },

            ]
        },













        // * Authentication
        {
            path: '/login',  element:<Login></Login>
        },
        {
            path: '/register',   element:<Registration></Registration>
        },
        {
            path: '/forget-password',   element:<ForgetPassword />
        },





    ])




    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Route;