import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Movie from "./Movie";
import addMovie from "../shared/addMovie";

class SingleMovie extends Component {

  handleSubmit = (movie, e) => {
    e.preventDefault();

    const {naziv, godina, slika, comments} = movie;

    const noviKomentar = {
      user: e.target.ime.value,
      comment: e.target.komentar.value
    };

    const komentari = comments ? [...comments, noviKomentar] : [noviKomentar];
    addMovie(naziv, godina, slika, komentari);
  };

  render() {
    if(this.props.filmovi.isEmpty()) return null;

    const movie = this.props.filmovi
      .find(film => film.naziv === this.props.match.params.naziv.replace(/_/g, " "));

    let komentariJsx;
    try {
      komentariJsx = movie.comments.map((k, i) => (
        <div key={i}>
          <small>{k.user}</small>
          <p>{k.comment}</p>
        </div>
      ));
    } catch (error) {
      komentariJsx = <p>Budite prvi koji će ostaviti komentar</p>;
    }

    return (
      <div>
        <Link to="/">&lt; Back</Link> <Movie podaci={movie} />
        {movie ? (
          <React.Fragment>
            {komentariJsx}
            <form onSubmit={this.handleSubmit.bind(this, movie)}>
              <h3>Dodaj komentar</h3>
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
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filmovi: state.get("filmovi")
  };
}

export default connect(
  mapStateToProps,
  null
)(SingleMovie);
