import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
  } = resData?.info || {};

  return (
    <div className="m-4 p-4 bg-gradient-to-r from-slate-200 to-zinc-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col">
      <div className="relative w-full">
        <img
          className="res-logo object-cover w-full h-48 rounded-lg"
          alt="restro-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 truncate p-2">{name}</h3>
      <h5 className="text-md text-gray-700 p-2 truncate">{cuisines?.join(", ")}</h5>
      <div className="info flex justify-between p-4 text-gray-800">
        <h5 className="font-medium">{avgRating} Stars</h5>
        <h5 className="font-medium">{sla?.deliveryTime} mins</h5>
      </div>
    </div>
  );
};

export const Badge = (RestroCard) => {
  return (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      sla,
    } = resData?.info || {};
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;

    return (
      <div className="m-4 p-4 bg-gradient-to-r from-slate-200 to-zinc-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative flex flex-col">
        <div className="relative w-full">
          <img
            className="res-logo object-cover w-full h-48 rounded-lg"
            alt="restro-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-2 rounded-md">
              <h3 className="text-white font-extrabold text-xl text-center">
                {header} {subHeader}
              </h3>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 truncate p-2">{name}</h3>
        <h5 className="text-md text-gray-700 p-2 truncate">{cuisines?.join(", ")}</h5>
        <div className="info flex justify-between p-4 text-gray-800">
          <h5 className="font-medium">{avgRating} Stars</h5>
          <h5 className="font-medium">{sla?.deliveryTime} mins</h5>
        </div>
      </div>
    );
  };
};

export default RestroCard;
