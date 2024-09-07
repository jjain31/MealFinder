import React from 'react'
import Counter from './Counter';
import { Items_Image } from '../utils/constants';
const ItemsList = (props) => {
const {itemCards}=props;
  return (
    <div className=' pt-2  border-b-[6px] border-b-slate-100 '> 
         {itemCards.map((item)=>
         <div className='flex justify-between border-b-[1px] border-b-slate-50 mb-8 px-2' key={item.card?.info?.id}>
          <div className='flex flex-col w-full justify-start flex-wrap'>
            <span className='px-2 text-start p-1 text-xs '>{item.card?.info?.isVeg ? "🟢":"🔴"}</span>
            <span className='px-2 text-start p-1 text-xl'>{item.card?.info?.name}</span>
            <span className='px-2 text-start p-1 text-lg'>Rs {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100 }</span>
            {item.card?.info?.ratings?.aggregatedRating?.rating ? <span className='px-2 text-start p-1 text-md'><i className="fa-solid fa-star"></i>{item.card?.info?.ratings?.aggregatedRating?.rating}</span>:<span></span>}
            <div className='text-start px-2 p-1 text-sm opacity-65'>{item.card?.info?.description}</div>
          </div>
          <div className='w-36 px-2 flex justify-center flex-col items-center mb-7 '>
                {item.card?.info?.imageId ?<img className='h-28 object-cover w-full rounded-md' alt='food-image' src={Items_Image+item.card?.info?.imageId}/>:<span className='h-0 w-0'> </span>}
                <div className="transform scale-90 absolute  translate-y-[60px] items-center hover:scale-100 "><Counter item={item}/>  </div> 
          </div>
           
        </div>)}
    </div>
  )
}

export default ItemsList