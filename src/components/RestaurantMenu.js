import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Counter from "./Counter";
import RestaurantCategories from "./RestaurantCategories";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const restroInfo=useRestaurantMenu(resId);
    const [indexShow,setindexShow]=useState(-1);
    if (restroInfo==null) {
        return <Shimmer />;
    }
    const { name, cloudinaryImageId, costForTwoMessage, cuisines, avgRating } = restroInfo?.cards[2]?.card?.card?.info;

    
    const categories=restroInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")  
    
    return(
        <div className="menu flex font h-full  justify-center items-center flex-col bg-gray-500 ">
            <h2 className="text-center  font-mono text-white font-extrabold text-6xl p-3 ">{name}</h2>
            <p className="text-white font-semibold p-2 text-2xl ">{cuisines.join(",")} - {costForTwoMessage}</p>
            <div className="flex justify-between items-center flex-col text-center flex-wrap bg-slate-300 m-2 border rounded  w-full max-w-4xl">
           
            {categories.map((category,index)=>
            <RestaurantCategories card={category} indexShow={index==indexShow?true:false} setindexShow={()=>setindexShow(index)} key={category.card?.card?.title}/>)}
            </div>
        </div>
    );
}
export default RestaurantMenu;