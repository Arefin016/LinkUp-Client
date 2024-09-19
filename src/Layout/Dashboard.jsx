import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;