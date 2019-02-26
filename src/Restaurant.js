import React from "react";

const Restaurant = ({
  name,
  imageUrl,
  cuisine,
  price,
  address,
  closeTime,
  openTime
}) => {
  return (
    <div className="w-20-l w-30-m w-100-ns  pa1 bg-washed-blue ma4 shadow-5 br3 b--purple bw2 ba pa2 animated fadeIn ">
      <p className="gray ttu f6 ma0 tc">{cuisine}</p>
      <hr className="w-30 mt0" />
      <img src={imageUrl} alt={name} className="w-100 ba b--silver" />
      <h2 className="ma0">{name}</h2>
      <hr />
      <h4 className="ma0">{address}</h4>
      <hr />
      <h3 className="ma0">
        {openTime}-{closeTime}
      </h3>
      <hr />
      <h3 className="ma0">~SGD {price}</h3>
      <hr />
      <input
        type="button"
        value="Book"
        className=" f4 br3 bg-light-purple ba white shadow-5 pointer hover-bg-purple ph3 pv2 grow-large flex center"
        onClick={() => {
          alert(`Your booking at ${name} has been confirmed.\nThank you.`);
        }}
      />
    </div>
  );
};

export default Restaurant;
