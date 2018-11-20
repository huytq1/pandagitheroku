import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron center">
        <h1 className="lead">
          Welcome to Media Library built with React, Redux, and Redux-saga{" "}
        </h1>
        <div>
          <NavLink to="library">
            <button className="btn btn-lg btn-primary"> Visit Library</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HomePage;
