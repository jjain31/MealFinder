import { useEffect, useState } from "react";
import { Menu_API_URL } from "./constants";
const useRestaurantMenu=(resId)=>{
    const [restroInfo,setrestroInfo]=useState(null);
    useEffect(()=>{
        api_call();
    },[]);
    const api_call= async ()=>{
        const data=await fetch(Menu_API_URL+resId);
        const json=await data.json();
        setrestroInfo(json?.data);
    }
    return restroInfo;
}
export default useRestaurantMenu;