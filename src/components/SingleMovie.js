import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Movie from "./Movie";
import addMovie from "../shared/addMovie";

class SingleMovie extends Component {
  // state = {};

  handleSubmit = e => {
    e.preventDefault();

    let foo = this.props.filmovi.filter(film => {
      return film.naziv === this.props.match.params.naziv.replace(/_/g, " ");
    });
    const movie = foo.get(0);

    const { naziv, godina, slika, comments } = movie;

    const noviKomentar = {
      user: e.target.ime.value,
      comment: e.target.komentar.value
    };
    console.log(comments);
    console.log(noviKomentar);

    const komentari = comments ? [...comments, noviKomentar] : [noviKomentar];
    console.log(komentari);

    addMovie(naziv, godina, slika, komentari);
  };

  render() {
    let foo = this.props.filmovi.filter(film => {
      return film.naziv === this.props.match.params.naziv.replace(/_/g, " ");
    });
    // console.log(foo.get(0));
    const movie = foo.get(0);

    let komentariJsx;

    try {
      komentariJsx = movie.comments.map(k => (
        <div>
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
        {komentariJsx}
        <form onSubmit={this.handleSubmit}>
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
