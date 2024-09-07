import React, { useState } from 'react'
import Counter from './Counter';
import ItemsList from './ItemsList';

const RestaurantCategories = (props) => {
const {card}=props;
const {title,itemCards}=card.card?.card;
const {indexShow,setindexShow}=props;
const handle=()=>{
  setindexShow();
}
  return (
    <div className='w-full shadow-lg  my-3 mx-auto px-1 hover:bg-gray-300 cursor-pointer '  >
        <div className="  flex justify-between font-bold p-2 text-black bg-white" onClick={handle} >
            <span className='text-2xl' >{title} ({itemCards.length})</span>
            <span className="bg-gray-400 text-2xl hover:scale-95" >⬇️</span>
        </div>

        {indexShow && <ItemsList itemCards={itemCards}/>}
    </div>
  )
}

export default RestaurantCategories