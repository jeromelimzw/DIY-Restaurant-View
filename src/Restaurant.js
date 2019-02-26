import React from "react";

const Restaurant = ({ name, imageUrl, cuisine, price, address }) => {
  return (
    <div className="w-20-l w-third-m w-100-ns  pa1 bg-washed-blue ma4 shadow-5 grow br3 b--blue bw2 ba pa2 pointer animated fadeIn ">
      <img src={imageUrl} alt={name} className="w-100 ba b--silver" />
      <h2>{name}</h2>
      <h3 className="gray ttu f6">{cuisine}</h3>
      <hr />
      <h3>~SGD {price}</h3>

      <hr />
      <h4>{address}</h4>
    </div>
  );
};

export default Restaurant;
