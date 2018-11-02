<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
>>>>>>> e63d3eb5995607ec4389c2c03c60a6b6ed0c72fe

import "./index.css";
import App from "./App";

<<<<<<< HEAD
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
=======
ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
>>>>>>> e63d3eb5995607ec4389c2c03c60a6b6ed0c72fe
