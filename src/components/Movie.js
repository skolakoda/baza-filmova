import React, { Component } from "react";
import { Link } from "react-router-dom";

import { deleteUrl } from "../config/api";

class Movie extends Component {
  deleteMovie = e => {
    e.preventDefault();
    const { naziv, _id } = this.props.podaci;
    if (window.confirm(`Delete movie: "${naziv}" ?`)) {
      fetch(deleteUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: _id })
      })
        .then(res => res.text())
        .then(res => {
          alert(res);
          window.location.reload();
        });
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
