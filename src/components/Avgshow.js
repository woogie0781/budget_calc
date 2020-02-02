import React from 'react';

const Avgshow = ({ avg }) => { // return값이 있는 함수를 props로 받을 경우 해당 함수는 function()의 형태로 작성해야한다.
    
    const average = avg();
    console.log(average)

    return (
        <div className='avg-show'> 예산액 :  
            {average}</div>
    )
};

export default Avgshow;