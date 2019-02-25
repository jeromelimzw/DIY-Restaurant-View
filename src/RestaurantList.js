import React from "react";
import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="flex flex-wrap justify-around ">
      {restaurants.map(a => (
        <Restaurant name={a.name} key={a._id} imageUrl={a.imageUrl} />
      ))}
    </div>
  );
};

export default RestaurantList;
