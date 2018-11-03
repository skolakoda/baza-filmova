import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  deleteMovie = () => {
    const { naziv, _id } = this.props.podaci;
    if (window.confirm(`Delete movie: "${naziv}" ?`)) {
      fetch("https://baza-podataka.herokuapp.com/obrisi-film/" + _id);
      alert("Movie deleted");
      window.location.reload();
    }
  };

  render() {
    const { id, naziv, godina, slika } = this.props.podaci;
    const loggedIn = this.props.loggedIn;
    return (
      <div>
        <Link
          key={id}
          to={{
            pathname: `/singlemovie/${naziv}`,
            state: this.props.podaci
          }}
        >
          <h3>{naziv}</h3>
        </Link>
        <div className="image-holder">
          {loggedIn ? (
            <span
              onClick={this.deleteMovie}
              className="delete-btn"
              title="Delete movie"
            >
              X
            </span>
          ) : null}
          <img src={slika} alt={naziv} />
        </div>

        <p>{godina}</p>
      </div>
    );
  }
}

export default Movie;

// TODO

// md5 za pass
// smestiti pass u local storage
