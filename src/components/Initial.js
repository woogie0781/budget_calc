import React from 'react';

const Initial = ({ children }) => {

    return (
        <div>
            <div className='app-title'>미니 가계부</div>
            <div className='content'>{children}</div>
        </div>
    )
};

export default Initial;