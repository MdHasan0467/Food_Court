import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DashboardNavBar from '../../../Shared/DashboardNavBar/DashboardNavBar';

const Dashboard = () => {
    return (
        <div>
            <DashboardNavBar></DashboardNavBar>
            <div className="grid grid-cols-12">
                <div className="sideBar col-span-3">
                    <ul>
                    
                    <li className='my-5 hover:underline'><Link to='/dashboard/user-profile'>Profile</Link></li>
                    <li className='my-5 hover:underline'><Link to='/dashboard/all-users'>All Users</Link></li>
                    <li className='my-5 hover:underline'><Link to='/dashboard/all-buyers'>All Customers</Link></li>
                    <li className='my-5 hover:underline'><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                    <li className='my-5 hover:underline'><Link to='/dashboard/admin-details'>Admin Details</Link></li>
                    
                    </ul>
            </div>
            <div className="outlet col-span-9">
            <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;