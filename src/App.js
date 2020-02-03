import React, { useState, useCallback, useRef } from 'react';
import Initial from './components/Initial';
import Foodlist from './components/Foodlist';
import Homelist from './components/Homelist';
import OnInsert from './components/OnInsert';
import Avgshow from './components/Avgshow';
const math = require('mathjs');

const App = () => {
  
  const [ foodlist, setfoodList ] = useState([]); 
  const [ homelist, sethomeList ] = useState([]);
  const [ initBudget, setinitBudget ] = useState(0);
  
  const foodId = useRef(1);
  const homeId = useRef(1);
  

  const onfoodInsert = useCallback((text, price) => {
    const foodItem = {
      id: foodId.current,
      text: text,
      price: price,
      checked: false
    };

    setfoodList(foodlist.concat(foodItem));
    foodId.current += 1;
  }, [foodlist]);

  const onhomeInsert = useCallback((text, price) => {
    const homeItem = {
      id: homeId.current,
      text: text,
      price: price,
      checked: false
    };

    sethomeList(homelist.concat(homeItem));
    homeId.current += 1;
  }, [homelist]);

  const onfoodToggle = useCallback(id => {
    setfoodList(foodlist.map(food => 
      food.id === id ? {...food, checked: !food.checked} : food,
    ))
  }, [foodlist]);

  const onhomeToggle = useCallback(id => {
    sethomeList(homelist.map(home => 
      home.id === id ? {...home, checked: !home.cheked} : home,  
    ))
  }, [homelist]);

  const onfoodRemove = useCallback(id => {
    setfoodList(foodlist.filter(food => food.id !== id))
  }, [foodlist]);

  const onhomeRemove = useCallback(id => {
    sethomeList(homelist.filter(home => home.id !== id))
  }, [homelist]);

  const getValFromInitial = useCallback(val => {
    setinitBudget(val);
    //console.log("초기값 : ", initBudget)
  }, []);

  const avg = useCallback(() => {
    let food_sum = 0;
    let home_sum = 0;

    foodlist.map(food  => (
      food_sum += parseInt(food.price)
    ));
    

    homelist.map(home => (
      home_sum += parseInt(home.price)
    ));

    // console.log(food_sum, home_sum, foodlist)
    const res = math.subtract(initBudget, math.add(food_sum, home_sum))
  

    return res;
  
  }, [foodlist, homelist, initBudget]);

  // const average = useCallback(() => avg(), []);


  return (
    <>
      <Initial>
        <OnInsert onfoodInsert={onfoodInsert} onhomeInsert={onhomeInsert} getValFromInitial={getValFromInitial}/>
        <Foodlist foodlist={foodlist} onToggle={onfoodToggle} onRemove={onfoodRemove}/>
        <Homelist homelist={homelist} onToggle={onhomeToggle} onRemove={onhomeRemove}/>
        <Avgshow avg={avg} />
      </Initial>
    </>
  )
};

export default App;