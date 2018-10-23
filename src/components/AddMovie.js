import React, { Component } from "react";
import "./AddMovie.css";

class AddMovie extends Component {
  state = {
    movieName: "",
    movieImg: "",
    movieYear: ""
  };

  handleInput = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  addMovie = e => {
    e.preventDefault();
    fetch("https://baza-podataka.herokuapp.com/dodaj-film/", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        naziv: this.state.movieName,
        godina: this.state.movieYear,
        slika: this.state.movieImg
      })
    })
      .then(res => {
        alert(
          `Movie " ${this.state.movieName.toUpperCase()}" has been updated to movie base. Thank you for updating!`
        );
        window.location.reload();
      })
      .catch(e => alert("Došlo je do greške"));
  };

  render() {
    return (
      <form onSubmit={this.addMovie}>
        <h2>Dodaj film</h2>
        <input
          className="input"
          name="movieName"
          onChange={this.handleInput}
          placeholder="Add title"
          required
        />
        <input
          className="input"
          name="movieYear"
          onChange={this.handleInput}
          placeholder="Add year"
          required
        />
        <input
          className="input"
          name="movieImg"
          onChange={this.handleInput}
          placeholder="Add img url"
          required
        />
        <button type="submit">Confirm</button>
      </form>
    );
  }
}

export default AddMovie;
