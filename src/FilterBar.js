import React from "react";
import { getCuisines } from "./services/cuisineService";

const FilterBar = ({ handleFilterCuisine }) => {
  const buttonClass =
    "f3 hover-bg-purple hover-white b--purple link ph3 pv2 purple pointer";
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
