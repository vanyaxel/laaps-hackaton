import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './service.css';

const User = () => {
    return (
        <div className='user-info'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <p className='user-text'>Para Camila López</p>
        </div>
    );
};

export default User;