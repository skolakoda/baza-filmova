import React, { Component } from "react";
import { Link } from "react-router-dom";

import Movie from "./Movie";

class SingleMovie extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.ime.value);
    console.log(e.target.komentar.value);
  };

  render() {
    return (
      <div>
        <Link to="/">&lt; Back</Link>{" "}
        <Movie podaci={this.props.location.state} />
        <form onSubmit={this.handleSubmit}>
          <label>Ime:</label>
          <br />
          <input name="ime" />
          <br />
          <label>Komentar: </label>
          <br />
          <textarea name="komentar" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SingleMovie;
