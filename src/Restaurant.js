import React from "react";

const Restaurant = ({ name, imageUrl, cuisine, price }) => {
  return (
    <div className="w-20-l w-100-m pa1 bg-near-white mh1 mv3">
      <img src={imageUrl} alt={name} className="w-100" />
      <h2>{name}</h2>
      <h3>{cuisine}</h3>
      <h3>Average Price: {price}</h3>

      <hr />
    </div>
  );
};

export default Restaurant;
