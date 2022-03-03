import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Profile from "./Profile";

const App = () => (
  <div className="container">
     <Profile />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
