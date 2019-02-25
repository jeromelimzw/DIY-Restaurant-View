import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
import FilterBar from "./FilterBar";
import SortByBar from "./SortByBar";
import { getRestaurants } from "./services/restaurantService";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [], selectedCuisine: "", sortBy: "" };
  }
  componentDidMount() {
    this.setState({ restaurants: getRestaurants() });
  }

  render() {
    const { restaurants, selectedCuisine, sortBy } = this.state;
    return (
      <div>
        <RestaurantList
          restaurants={restaurants}
          selectedCuisine={selectedCuisine}
          sortBy={sortBy}
        />
        <FilterBar />
        <SortByBar />
      </div>
    );
  }
}

export default HomePage;
