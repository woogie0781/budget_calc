import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';


const Fooditem = ({ fooditem, onToggle, onRemove }) => {

    const {id, text, price, checked } = fooditem;

    return (
        <div className='food-item'>
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className='food'>소비내역  :
                    {text}
                </div>
                <div className='price'>금액 :
                    {price}
                </div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );

};

export default Fooditem;