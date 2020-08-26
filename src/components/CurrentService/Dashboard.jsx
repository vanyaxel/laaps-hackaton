import React from 'react';
import CardUser from './CardUser';
import TimeLineService from './TimeLineService';
import NavbarDashboad from '../../components/auth/Navbars/NavbarDashboad';

import User from './User';

const Dashboard = () => {
    return (
        <div>
            <NavbarDashboad />

            <div className='user-container'>
                <CardUser />
            </div>
            <div>
                <TimeLineService />
            </div>
        </div >
    );
};

export default Dashboard;