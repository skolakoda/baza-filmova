import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteUrl } from "../config/api";
import { deleteMovie } from "../store/actions";

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
          this.props.deleteMovie(_id);
        });
    }
  };

  render() {
    if (!this.props.podaci) return null;
    const {naziv, godina, slika} = this.props.podaci

    const loggedIn = localStorage.getItem("loggedIn") === "true";
    return (
      <div>
        <h3>{naziv}</h3>
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

const mapDispatchToProps = { deleteMovie };

export default connect(
  null,
  mapDispatchToProps
)(Movie);
