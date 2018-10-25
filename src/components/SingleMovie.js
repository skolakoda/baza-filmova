<<<<<<< HEAD
import React, { Component } from "react";

class SingleMovie extends Component {
  state = {};

  render() {
    console.log("PROPS", this.props.location.state);
    return (
      <div>
        <h1>Single Movie</h1>
      </div>
    );
=======
import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Movie from './Movie'

class SingleMovie extends Component {
  state = {
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.ime.value);
    console.log(e.target.komentar.value);
  }
  
  render() {
    return (
     <div>
        <Link to='/'>&lt; Back</Link>{' '}
        <Movie podaci={this.props.location.state} />

        <form onSubmit={this.handleSubmit}>
          <label>Ime:</label><br/>
          <input name="ime" /><br/>
          <label>Komentar: </label><br/>
          <textarea name="komentar" /><br/>
          <button>Submit</button>
        </form>

     </div>
    )
>>>>>>> master
  }
}

export default SingleMovie;
