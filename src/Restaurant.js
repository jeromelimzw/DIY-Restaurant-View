import React from "react";

const Restaurant = ({ name, imageUrl }) => {
  return (
    <div className="w-20 pa1 bg-near-white mh1 mv3">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <hr />
    </div>
  );
};

export default Restaurant;
