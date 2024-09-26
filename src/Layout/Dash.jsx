import React from 'react';
import Sidebar from '../pages/Shared/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Dash = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dash;