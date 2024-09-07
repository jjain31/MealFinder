import RestroCard, { Badge } from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofrestaurants, setlistofrestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterList, setfilterList] = useState([]);
  const OnlineStatus = useOnlineStatus();
  const RestaurantCardUpdated = Badge(RestroCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (OnlineStatus === false) {
    return <h1>Look's like you are not connected to the Internet! Please check your internet connection.</h1>;
  }

  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-500 mt-0 mb-0 ">
      <div className="filter flex flex-col sm:flex-row justify-start items-center p-4">
        <div className="search flex items-center mb-4 sm:mb-0">
          <input
            type="text"
            className="search-box bg-white h-9 px-3 rounded-l-md focus:outline-none sm:w-72 w-full"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="search-btn rounded-r-md bg-purple-500 px-3 py-1 text-white hover:bg-purple-800 h-9"
            onClick={() => {
              const update_list = listofrestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterList(update_list);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn ml-0 sm:ml-auto p-2 text-white border rounded-md bg-purple-600 hover:bg-purple-800"
          onClick={() => {
            const filteredList = listofrestaurants.filter((res) => res.info.avgRating > 4.3);
            setfilterList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="link_card flex flex-wrap justify-center items-center gap-6 p-4">
        {filterList.map((restaurant) => {
          const hasSubHeader = restaurant?.info?.aggregatedDiscountInfoV3?.subHeader;

          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
            >
              {hasSubHeader ? (
                <RestaurantCardUpdated resData={restaurant} />
              ) : (
                <RestroCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
