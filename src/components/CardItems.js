import React from 'react'
import { Items_Image } from '../utils/constants';
import Counter from './Counter';
const CardItems = (props) => {
    const {itemCards}=props;
  
    const total_cost = itemCards.reduce((total, item) => {
      const price = item.card?.info?.price || item.card?.info?.defaultPrice || 0;
      return total + (price / 100); // Convert price to rupees and add to total
  }, 0);

    return (
      <div className=' mx-auto pt-2 w-6/12   '> 
           {itemCards.map((item)=>
           <div className='flex justify-between border-b-[1px] border-b-slate-50 mb-8 px-2 ' key={item.card?.info?.id}>
            <div className='flex flex-col w-full justify-start flex-wrap'>
              <span className='px-2 text-start p-1 text-xl'>{item.card?.info?.name}</span>
              <span className='px-2 text-start p-1 text-lg'>Rs {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100 }</span>
              
            </div>
            <div className='w-36 px-2 flex justify-center flex-col items-center mb-7 '>
                  {item.card?.info?.imageId ?<img className='h-28 object-cover w-full rounded-md' alt='food-image' src={Items_Image+item.card?.info?.imageId}/>:<span className='h-0 w-0'> </span>}
                  
            </div>
             
          </div>)}
          {itemCards.length==0?<div className='text-5xl font-bold text-center text-white pt-8'>Cart is empty 🛒</div>:<div></div>}
          {total_cost>0?<div className='font-bold p-10 text-white text-4xl px-0' >Total Cost: Rs {total_cost.toFixed(2)}</div>:<div></div>}
      </div>
    )
  }

export default CardItems