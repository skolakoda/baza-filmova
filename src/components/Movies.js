import React, {Component} from 'react'
// import filmovi from '../data/filmovi.json'
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
  deleteMovie =(id,name)=>{
    if(window.confirm(`Delete movie: "${name}" ?`)){
      fetch('https://baza-podataka.herokuapp.com/obrisi-film/' +id)
      alert("Movie  deleted")
      window.location.reload()
      }
    }
  

  render() {
    const filmoviJsx = this.state.filmovi.map(film => (
      <div key={film._id}>
        <h3>{film.naziv}</h3>
        <img src={film.slika} alt={film.naziv} />
        <p>{film.godina}</p>
        <button onClick={()=>this.deleteMovie(film._id,film.naziv)}>Delete</button>
      </div>
    ))
   

    return (
      <div className="movies-wrapper">
        {!this.state.isLoaded ? 'Učitava se...' : null}
          {filmoviJsx}
      </div>
    )
  }
}

export default Movies