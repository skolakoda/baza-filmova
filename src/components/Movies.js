import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

import { getUrl } from "../config/api";
import Movie from "./Movie";
import MiniAddMovie from "./MiniAddMovie";
import md5 from "md5";

import {setFilmovi, setFiltered, setPassword, fetchSuccess} from '../store'
import "./Movies.css";

class Movies extends Component {

  sortByYearAsc = () => {
    let arr = [...this.props.filmovi].sort((a, b) => {
      return a.godina - b.godina;
    });
    this.props.setFiltered(arr);
  };

  sortByYearDesc = () => {
    let arr = [...this.props.filmovi].sort((a, b) => {
      return b.godina - a.godina;
    });
    this.props.setFiltered(arr);
  };

  sortAlpha = () => {
    let arr = [...this.props.filmovi].sort((a, b) => {
      var x = a.naziv.toLowerCase();
      var y = b.naziv.toLowerCase();
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
    this.props.setFiltered(arr);
  };

  sortAlphaZ = () => {
    let arr = [...this.props.filmovi].sort((a, b) => {
      var x = a.naziv.toLowerCase();
      var y = b.naziv.toLowerCase();
      if (y < x) return -1;
      if (y > x) return 1;
      return 0;
    });
    this.props.setFiltered(arr);
  };

  searchMovie = event => {
    let filtered = [...this.props.filmovi].filter(movie => {
      return (
        movie.naziv.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      );
    });
    this.props.setFiltered(filtered);
  };

  handleChange = e => {
    this.props.setPassword(e.target.value);
  };

  onClickLogin = () => {
    if (md5(this.props.password) === "8fa0999540532f709fafa537818c17f1") {
      localStorage.setItem("loggedIn", "true");
      alert("Uspesno ste se ulogovali");
      window.location.reload();
    } else {
      alert("Uneli ste pogresnu lozinku");
    }
  };

  onClickLogout = () => {
    localStorage.setItem("loggedIn", "false");
    alert("Izlogovali ste se");
    window.location.reload();
  };

  componentDidMount() {
    fetch(getUrl)
      .then(response => response.json())
      .then(json => {
        this.props.setFiltered(json);
        this.props.setFilmovi(json);
        this.props.fetchSuccess();
      });
  }

  render() {
    let loggedIn;
    if (localStorage.getItem("loggedIn") === "true") {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
    const filmoviJsx = this.props.filtered.map(film => (
      <Link
        key={film._id}
        to={{
          pathname: `/singlemovie/${film._id}`,
          state: film
        }}
      >
        <Movie podaci={film} loggedIn={loggedIn} />
      </Link>
    ));

    return (
      <div>
        {loggedIn ? (
          <button onClick={this.onClickLogout}>Logout</button>
        ) : (
          <React.Fragment>
            <input
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            <button onClick={this.onClickLogin}>Login</button>
          </React.Fragment>
        )}
        <MiniAddMovie />
        <div>
          <button onClick={this.sortByYearAsc}>Sort by year Asc</button>
          <button onClick={this.sortByYearDesc}>Sort by year Desc</button>
          <button onClick={this.sortAlpha}>Sort A-Z</button>
          <button onClick={this.sortAlphaZ}>Sort Z-A</button>
        </div>
        <input
          type="text"
          placeholder="Search for movie"
          onChange={this.searchMovie}
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
    filmovi: state.filmovi,
    filtered: state.filtered,
    isLoaded: state.isLoaded,
    password: state.password,
  }
}

const mapDispatchToProps = {
  setFilmovi, 
  setFiltered, 
  setPassword, 
  fetchSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
