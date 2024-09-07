import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    //check if user is online or not
    const [OnlineStatus,setOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{setOnlineStatus(false)});
        window.addEventListener("online",()=>{setOnlineStatus(true)});
    },[]);
    //return boolean value
    return OnlineStatus;
}
export default useOnlineStatus;