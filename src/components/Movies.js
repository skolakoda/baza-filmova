import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { List } from 'immutable';

import { getUrl } from "../config/api";
import Movie from "./Movie";
import MiniAddMovie from "./MiniAddMovie";
import {setFilmovi, setFiltered, setPassword, fetchSuccess, sortByYearDesc, sortByYearAsc, sortAlpha, sortAlphaZ, searchMovie} from '../store/actions';
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
        <div>
          <button onClick={this.props.sortByYearAsc}>Sort by year Asc</button>
          <button onClick={this.props.sortByYearDesc}>Sort by year Desc</button>
          <button onClick={this.props.sortAlpha}>Sort A-Z</button>
          <button onClick={this.props.sortAlphaZ}>Sort Z-A</button>
        </div>
        <input
          type="text"
          placeholder="Search for movie"
          onChange={e => this.props.searchMovie(e.target.value)}
        />

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
    filtered: state.get('filtered'),
    isLoaded: state.get('isLoaded'),
  }
}

const mapDispatchToProps = {
  setFilmovi, 
  setFiltered, 
  setPassword, 
  fetchSuccess,
  sortByYearDesc,
  sortByYearAsc,
  sortAlpha,
  sortAlphaZ,
  searchMovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
