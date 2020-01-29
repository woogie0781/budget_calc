import React, { useState, useCallback, useRef } from 'react';
import Initial from './components/Initial';
import Foodlist from './components/Foodlist';
import Homelist from './components/Homelist';
import OnInsert from './components/OnInsert';


const App = () => {
  
  const [ foodlist, setfoodList ] = useState([]); 
  const [ homelist, sethomeList ] = useState([]);
  
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

  return (
    <>
      <Initial>
        <OnInsert onfoodInsert={onfoodInsert} onhomeInsert={onhomeInsert} />
        <Foodlist foodlist={foodlist} onToggle={onfoodToggle} onRemove={onfoodRemove}/>
        <Homelist homelist={homelist} onToggle={onhomeToggle} onRemove={onhomeRemove}/>
      </Initial>
    </>
  )
};

export default App;