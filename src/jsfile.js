import React,{lazy,fallback, Suspense, useState, useEffect} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Card from "./components/Card";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider  } from "react-redux";
import appStore from "./utils/appStore";

const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
const [UserName,setUserName]=useState("");
//Authentication Code

useEffect(()=>{
    const data={
        "user":"Jainam"
    };
    setUserName(data.user);
})
    return (
        <Provider store={appStore}>
       
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
 
        </Provider>
    );
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/card",
                element:<Card/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
                errorElement:<Error/>
            }
        ]
    }
    
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);