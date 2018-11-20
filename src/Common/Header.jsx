import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <nav className="navbar navbar-default">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          {" | "}
          <NavLink to="library" activeClassName="active">
            Library
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
