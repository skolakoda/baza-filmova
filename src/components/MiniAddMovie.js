import React, { Component } from "react";
import "./Movies.css";

class MiniAddMovie extends Component {
  state = {
    movieName: "",
    movieImg: "",
    movieYear: "",
    visible: false
  };

  togle = () => {
    console.log("TOGLE")
    this.setState({
      visible: !this.state.visible
    });
  };

  handleInput = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
    console.log("STATE",this.state)
  }

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
    let { visible } = this.state;
    return (
      <div>
        <button onClick={this.toggle}>Add Movie</button>
        <form
          onSubmit={this.addMovie}
          style={visible ? { display: "block" } : { display: "none" }}
        >
          <input
            name="movieName"
            onChange={this.handleInput}
            placeholder="Add title"
            required
          />
          <input
            name="movieYear"
            onChange={this.handleInput}
            placeholder="Add year"
            required
          />
          <input
            name="movieImg"
            onChange={this.handleInput}
            placeholder="Add img url"
            required
          />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default MiniAddMovie;
