import React from "react";
import { getCuisines } from "./services/cuisineService";

const FilterBar = ({ handleFilterCuisine }) => {
  return (
    <div>
      <button
        type="button"
        value=""
        onClick={handleFilterCuisine}
        className="f3"
      >
        All
      </button>
      {getCuisines().map(a => (
        <input
          type="button"
          value={a.name}
          onClick={handleFilterCuisine}
          className="f3"
        />
      ))}
    </div>
  );
};

export default FilterBar;
