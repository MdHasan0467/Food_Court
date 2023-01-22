import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import DashboardNavBar from '../../../Shared/DashboardNavBar/DashboardNavBar';

const Dashboard = () => {
    const { logUser } = useContext(AuthContext);
    return (
        <div>
            <DashboardNavBar></DashboardNavBar>
            <div className="grid grid-cols-12">
                <div className="sideBar col-span-3">
                    <ul>
                    
                    
                    {
                        logUser?.role === 'admin' && 
                        <>
                        <li className='my-5 hover:underline'><Link to='/dashboard/user-profile'>Profile</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/all-users'>All Users</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/all-buyers'>All Customers</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/update-food-court'>Update Food Court</Link></li>
                        </>
                    }

                        
                        
                        
                        
                    {
                        logUser?.role === 'Buyer' && 
                        <>
                        <li className='my-5 hover:underline'><Link to='/dashboard/user-profile'>Profile</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/admin-details'>Admin Details</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/Orders'>My Orders</Link></li>
                        <li className='my-5 hover:underline'><Link to='/dashboard/wishes'>My Wishes</Link></li>

                        </>
                    }

                        
                        
                        
                        
                   
                    
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