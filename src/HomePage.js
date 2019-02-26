import React, { Component } from "react";
import RestaurantList from "./RestaurantList";
import FilterBar from "./FilterBar";
import SortByBar from "./SortByBar";
import { getRestaurants } from "./services/restaurantService";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [], selectedCuisine: undefined, sorting: "" };
  }
  componentDidMount() {
    this.setState({
      restaurants: getRestaurants(),
      selectedCuisine: "",
      sorting: "AZ"
    });
  }

  handleSortBy = event => {
    this.setState({ sorting: event.target.value });
  };

  handleFilterCuisine = event => {
    this.setState({ selectedCuisine: event.target.value });
  };

  render() {
    const { restaurants, selectedCuisine, sorting } = this.state;
    const { handleSortBy, handleFilterCuisine } = this;
    return (
      <div>
        <FilterBar handleFilterCuisine={handleFilterCuisine} />
        <SortByBar handleSortBy={handleSortBy} />
        <RestaurantList
          restaurants={restaurants}
          selectedCuisine={selectedCuisine}
          sorting={sorting}
        />
      </div>
    );
  }
}

export default HomePage;
