import React from "react";

const SortByBar = ({ handleSortBy }) => {
  return (
    <select className="f3" onChange={handleSortBy}>
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
      <option value="ascendingPrice">$-$$$</option>
      <option value="descendingPrice">$$$-$</option>
    </select>
  );
};

export default SortByBar;
