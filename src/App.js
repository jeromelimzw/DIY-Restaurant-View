import React, { Component } from "react";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <HomePage />
      </div>
    );
  }
}

export default App;
