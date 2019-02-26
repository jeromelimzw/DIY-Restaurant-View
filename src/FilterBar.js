import React from "react";
import { getCuisines } from "./services/cuisineService";

const FilterBar = ({ handleFilterCuisine }) => {
  const buttonClass = "f3 br3 bw2 bg-light-green b--green shadow-5 pointer";
  return (
    <div>
      <button
        type="button"
        value=""
        onClick={handleFilterCuisine}
        className={buttonClass}
      >
        All
      </button>
      {getCuisines().map(a => (
        <input
          type="button"
          value={a.name}
          onClick={handleFilterCuisine}
          className={buttonClass}
        />
      ))}
    </div>
  );
};

export default FilterBar;
