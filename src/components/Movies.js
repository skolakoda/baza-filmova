import React, {Component} from 'react'

import Movie from './Movie'
import MiniAddMovie from './MiniAddMovie'
import './Movies.css';

class Movies extends Component {
  state = {
    filmovi: [],
    isLoaded: false,
  }

  componentDidMount() {
    fetch('https://baza-podataka.herokuapp.com/filmovi/')
    .then(response => response.json())
    .then(json => this.setState({
      filmovi: json,
      isLoaded: true
    }))
  }

  render() {
    const filmoviJsx = this.state.filmovi.map(film => (
      <Movie key={film._id} podaci={{
        naziv: film.naziv,
        godina: film.godina,
        slika: film.slika,
        _id: film._id,
      }} />
    ))

    return (
      <div>
        <MiniAddMovie/>
        <div className="movies-wrapper">
          {!this.state.isLoaded ? 'Učitava se...' : null}
          {filmoviJsx}
        </div>
      </div>
    )
  }
}

export default Movies