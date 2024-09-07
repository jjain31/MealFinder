import React, {
  useEffect,
  useState
} from 'react'
import Shimmer from './Shimmer';

import React, {
  useState,
  useEffect
} from 'react';
import Shimmer from './Shimmer'; // Assuming Shimmer is a loading component

const User = () => {
  const [userInfo, setUserInfo] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jjain31');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  if (userInfo == null) {
    return <Shimmer / > ;
  }

  const {
    name,
    location,
    avatar_url,
    public_repos,
    followers,
    following
  } = userInfo;

  return ( <
    div className = "user-card min-h-screen bg-gray-500 text-center text-white flex justify-center items-center flex-col" >
    <
    img src = {
      avatar_url
    }
    alt = {
      `${name}'s profile picture`
    }
    className = "avatar h-40" / >
    <
    div className = "user-info p-2" >
    <
    h2 > {
      name
    } < /h2> <
    p > {
      location ? ( <
        span className = "location p-2" >
        <
        i className = "fas fa-map-marker-alt p-2 " > < /i> {location} <
        /span>
      ) : ( <
        span className = "location" >
        <
        i className = "fas fa-map-marker-alt" > < /i>India <
        /span>
      )
    } <
    /p> <
    ul className = "stats" >
    <
    li >
    <
    i className = "fas fa-code-branch" > < /i> Repositories: {public_repos} <
    /li> <
    li >
    <
    i className = "fas fa-users" > < /i> Followers: {followers} <
    /li> <
    li >
    <
    i className = "fas fa-user-friends" > < /i> Following: {following} <
    /li> <
    /ul> <
    /div> <
    /div>
  );
};

export default User;