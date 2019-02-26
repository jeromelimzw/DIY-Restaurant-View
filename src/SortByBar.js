import React from "react";

const SortByBar = ({ handleSortBy }) => {
  return (
    <select
      className="f3 br3 bg-light-blue b--blue bw2 w-20 tc"
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
