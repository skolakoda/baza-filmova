import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <h1>Baza filmova {this.props.counter}</h1>
      </header>
    );
  }
}

export default Header;
