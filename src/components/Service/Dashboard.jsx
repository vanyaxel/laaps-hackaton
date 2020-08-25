import React from 'react';
import CardUser from './CardUser';
import TimeLineService from './TimeLineService';
import User from './User';

const Dashboard = () => {
    return (
        <div>
            <div className='user-container'>
                <User />
                <CardUser />
            </div>
            <div>
                <TimeLineService />
            </div>
        </div >
    );
};

export default Dashboard;