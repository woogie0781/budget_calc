import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

const OnInsert = ({ onfoodInsert, onhomeInsert }) => {

    const [ value ,setValue ] = useState('');
    const [ initialValue, setinitValue ] = useState('food');
    const [ price, setPrice ] = useState('');
    //const input = useRef(null);

    const onSubmit = useCallback(e => { // 버튼클릭시 동작
        
        if  (value === '' || price === '') {
            alert('내역과 금액을 기입해주세요.')
        } else {

            if (initialValue === 'food') {
                onfoodInsert(value, price)
            } else if (initialValue === 'home') {
                onhomeInsert(value, price)
            }
            setValue('');
            setPrice('');
        }
        e.preventDefault();

    }, [onfoodInsert, onhomeInsert, initialValue, value, price]);

    const handleChange = useCallback(e => { // checkbox 값 변경시 적용
        setinitValue(e.target.value)
    }, []);

    const onChangeValue = useCallback(e => { // 소비내역 input의 값이 변할 때 적용
        setValue(e.target.value)
        
    }, []);

    const priceChange = useCallback(e => { // 금액 input의 값이 변할 때 적용
        setPrice(e.target.value)
    }, []);

    return (
        <div>
            <form className='insert' onSubmit={onSubmit} >
                <div>소비분류  : 
                <select value={initialValue} onChange={handleChange}>
                    <option value='food'>식비</option>
                    <option value='home'>주거비</option>
                </select>
                </div>
                <div>소비내역  :  
                <input value={value} onChange={onChangeValue}  />
                </div>
                <div>금액  :
                <input type='number' value={price} onChange={priceChange}/> 
                <button type='submit'><MdAdd /></button>
                </div>
            </form>
        </div>
    );
};

export default OnInsert;