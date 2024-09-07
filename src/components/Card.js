import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItems from './CardItems';
import ItemsList from './ItemsList';
import { clearCart } from '../utils/cartSlice';

const Card = () => {
  const cartItems=useSelector((store)=>store.cart.items);
  const dispatch=useDispatch();
  
  function clear_cart(){
    dispatch(clearCart());
  }
  return (
    <div className='min-h-screen bg-gray-500' >
     <div className=' flex justify-start items-center '>
        <h1 className='font-bold p-10 text-white text-5xl mx-auto ' >Cart</h1>
        <button className="menu_iteam w-28 h-10 rounded-lg border border-solid bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br   text-white font-light mr-4" onClick={clear_cart}>Clear cart</button>
      </div>
        <div>
          {}
          <CardItems itemCards={cartItems} />
          
        </div>
    </div>
  )
}

export default Card