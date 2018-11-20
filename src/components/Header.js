import React, { Component } from "react";
import { Link } from "react-router-dom";

import Login from './Login'

const linkStyle = {
  color: "white"
};

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav>
          <Link style={linkStyle} to="/">
            Home
          </Link>{" "}
          <Link style={linkStyle} to="/add">
            Add movie
          </Link>
        </nav>
        <Login/>
        <h1>Baza filmova</h1>
      </header>
    );
  }
}

export default Header;
