import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../App.css";
import Header from "../Common/Header";
import routes from "../routes";
class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {routes.map(r => (
          <div key={r.path}>
            <Route path={r.path} exact component={r.component} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
