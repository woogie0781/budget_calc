import React from 'react';
import Homeitem from './Homeitem';

const Homelist = ({ homelist, onToggle, onRemove }) => {

    return (
        <div className='home-list'>
            {homelist.map(home => (
                <Homeitem 
                homeitem={home}
                key={home.id}
                onToggle={onToggle}
                onRemove={onRemove}
                />
            ))}
        </div>
    )
};

export default Homelist;