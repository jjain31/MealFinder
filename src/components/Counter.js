import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItems } from '../utils/cartSlice';

const Counter = ({ item }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  const handleCounterChange = (change) => {
    if (change === 1) {
      dispatch(addItem(item));
      setCounter((prevCounter) => Math.max(prevCounter + change, 0));
    } else {
      dispatch(removeItems());
      setCounter((prevCounter) => Math.max(prevCounter + change, 0));
    }

   
  };

  return (
    <div className="menu_iteam w-24 rounded-lg border border-solid bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br pl-3 pr-3 pt-1 pb-1 text-white font-light">
      {counter === 0 ? (
        <button
          className="w-full"
          onClick={() => handleCounterChange(1)}
        >
          Add
        </button>
      ) : (
        <div className="flex justify-between items-center">
          <button onClick={() => handleCounterChange(-1)} className="counter-dec pr-2">
            -
          </button>
          <span>{counter}</span>
          <button onClick={() => handleCounterChange(1)} className="counter-inc pl-2 font-bold">
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Counter;
