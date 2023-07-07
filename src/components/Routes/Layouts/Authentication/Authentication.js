import React from 'react';
import AuthenticationNavbar from '../../../Shared/AuthenticationNavbar/AuthenticationNavbar';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div>
            <AuthenticationNavbar />
            <Outlet />
        </div>
    );
};

export default Authentication;