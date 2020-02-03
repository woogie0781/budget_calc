import React, { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';

const OnInsert = ({ onfoodInsert, onhomeInsert, getValFromInitial }) => {

    const [ value ,setValue ] = useState('');
    const [ initialValue, setinitValue ] = useState('food');
    const [ price, setPrice ] = useState('');
    const [ budget, setBudget ] = useState(0);
    const input = useRef(null);

    const onSubmit = useCallback(e => { // 버튼클릭시 동작
        getValFromInitial(budget);     
        
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
        input.current.focus();

    }, [getValFromInitial, onfoodInsert, onhomeInsert, budget, initialValue, value, price]);

    const handleChange = useCallback(e => { // checkbox 값 변경시 적용
        setinitValue(e.target.value)
    }, []);

    const onChangeValue = useCallback(e => { // 소비내역 input의 값이 변할 때 적용
        setValue(e.target.value)
        input.current.focus();
    }, []);

    const priceChange = useCallback(e => { // 금액 input의 값이 변할 때 적용
        setPrice(e.target.value)
    }, []);

    const budgetChange = useCallback(e => {
        setBudget(e.target.value)
    }, []);

    return (
        <div>
            <form className='insert' onSubmit={onSubmit} >
                <div className='aim-budget'>목표예산 : 
                <input type='number' value={budget} onChange={budgetChange}/>  
                </div>  
                <div>소비분류  : 
                <select value={initialValue} onChange={handleChange}>
                    <option value='food'>식비</option>
                    <option value='home'>주거비</option>
                </select>
                </div>
                <div>소비내역  :  
                <input value={value} onChange={onChangeValue} ref={input} />
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