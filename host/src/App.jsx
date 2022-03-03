import React from "react";
import ReactDOM from "react-dom"; 
import Profile from 'home/Profile'; 

import "./index.css"; 

const App = () => (
  <div className="container">
      <Profile /> 
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
