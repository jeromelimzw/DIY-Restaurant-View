import React from "react";
import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurants, selectedCuisine, sorting }) => {
  return (
    <div className="flex flex-wrap ">
      {restaurants
        .filter(a => a.cuisine.name.includes(selectedCuisine))
        .sort((a, b) => {
          return sorting === "AZ"
            ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            : sorting === "ZA"
            ? b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            : sorting === "ascendingPrice"
            ? a.averagePrice - b.averagePrice
            : sorting === "descendingPrice"
            ? b.averagePrice - a.averagePrice
            : undefined;
        })
        .map(a => (
          <Restaurant
            name={a.name}
            key={a._id}
            imageUrl={a.imageUrl}
            cuisine={a.cuisine.name}
            price={a.averagePrice}
            address={a.address}
            openTime={a.openingTime}
            closeTime={a.closingTime}
            postCode={a.postCode}
          />
        ))}
    </div>
  );
};

export default RestaurantList;
