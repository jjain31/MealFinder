import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-removebg-preview.png';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const OnlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex flex-col md:flex-row justify-between items-center bg-gray-600 shadow-lg p-4">
      <div className="logo-container w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start">
        <img className="w-32 h-auto" src={logo} alt="logo" />
      </div>

      <div className="nav-items w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-end gap-4 md:gap-10 items-center">
        <Link className="hover:bg-gray-300 hover:rounded-md text-purple-400 font-semibold text-lg px-2">
          Online Status: {OnlineStatus === false ? "🔴" : "🟢"}
        </Link>
        <Link to="/grocery" className="hover:bg-gray-300 hover:rounded-md text-purple-400 font-semibold text-lg px-2">
          Grocery
        </Link>
        <Link to="/" className="hover:bg-gray-300 hover:rounded-md text-purple-400 font-semibold text-lg px-2">
          Home
        </Link>
        <Link to="/about" className="hover:bg-gray-300 hover:rounded-md text-purple-400 font-semibold text-lg px-2">
          About Us
        </Link>
        <Link to="/contact" className="hover:bg-gray-300 hover:rounded-md text-purple-400 font-semibold text-lg px-2">
          Contact Us
        </Link>
        <Link to="/card" className="hover:bg-gray-300 hover:rounded-md text-purple-400 font-semibold text-lg px-2">
          <i className="fa-solid fa-cart-shopping"></i> Cart ({cartItems.length})
        </Link>
        <button
          className="rounded bg-purple-500 px-4 py-1 text-white hover:bg-purple-800 hover:scale-105"
          onClick={() => setbtnName(btnName === "Logout" ? "Login" : "Logout")}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
