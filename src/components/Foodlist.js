import React from 'react';
import Fooditem from './Fooditem';

const Foodlist = ({ foodlist, onToggle, onRemove }) => {

    return (
        <div className='food-list'>
            {foodlist.map(food => (
                <Fooditem 
                fooditem={food}
                key={food.id}
                onToggle={onToggle}
                onRemove={onRemove}
                />
            ))}
        </div>
    )
};

export default Foodlist;