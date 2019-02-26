import React from "react";

const SortByBar = ({ handleSortBy }) => {
  return (
    <select
      className="f3 b--purple purple hover-bg-purple hover-white w-20 tc bg-transparent bw1 pointer"
      onChange={handleSortBy}
    >
      <option value="AZ">A-Z</option>
      <option value="ZA">Z-A</option>
      <option value="ascendingPrice">$-$$$</option>
      <option value="descendingPrice">$$$-$</option>
    </select>
  );
};

export default SortByBar;
