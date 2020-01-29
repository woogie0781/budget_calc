import React, { useState, useCallback } from 'react';

const Initial = ({ children }) => {
    const [ value, setValue ] = useState(0);

    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, []);

    return (
        <div className='aim-budget'>목표예산 : 
            <input type='number' placeholder='0' value={value} onChange={onChange}/>
            <div className='app-title'>미니 가계부</div>
            <div className='content'>{children}</div>
        </div>
    )
};

export default Initial;