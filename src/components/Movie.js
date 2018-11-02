import React, { Component } from "react";

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
    const { naziv, godina, slika } = this.props.podaci;
    return (
      <div>
        <h3>{naziv}</h3>
        <div className="image-holder">
        <span onClick={this.deleteMovie} className="delete-btn" title="Delete movie">X</span>
        <img src={slika} alt={naziv} />
        </div>
        <p>{godina}</p>
      </div>
    );
  }
}

export default Movie;
