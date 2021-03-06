import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Filter from "./Filter";

import Movie from "./Movie";
import MiniAddMovie from "./MiniAddMovie";
import "./Movies.css";

class Movies extends Component {
  render() {
    const filmoviJsx = this.props.filtered.map(film => (
      <Link
        key={film._id}
        to={{
          pathname: `/movie/${film.naziv.replace(/ /g, "_")}`
        }}
      >
        <Movie podaci={film} />
      </Link>
    ));

    return (
      <div>
        <MiniAddMovie />
        <Filter />

        <div className="movies-wrapper">
          {!this.props.isLoaded ? "Učitava se..." : null}
          {filmoviJsx}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filtered: state.get("filtered"),
    isLoaded: state.get("isLoaded")
  };
}

export default connect(
  mapStateToProps,
  null
)(Movies);
