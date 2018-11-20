import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { List } from "immutable";
import Filter from "./Filter";
import { getUrl } from "../config/api";
import Movie from "./Movie";
import MiniAddMovie from "./MiniAddMovie";
import {
  setFilmovi,
  setFiltered,
  setPassword,
  fetchSuccess
} from "../store/actions";
import "./Movies.css";

class Movies extends Component {
  componentDidMount() {
    fetch(getUrl)
      .then(response => response.json())
      .then(filmovi => {
        this.props.setFiltered(List(filmovi));
        this.props.setFilmovi(List(filmovi));
        this.props.fetchSuccess();
      });
  }

  render() {
    const filmoviJsx = this.props.filtered.map(film => (
      <Link
        key={film._id}
        to={{
          pathname: `/singlemovie/${film._id}`,
          state: film
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

const mapDispatchToProps = {
  setFilmovi,
  setFiltered,
  setPassword,
  fetchSuccess
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
