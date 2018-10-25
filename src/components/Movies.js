import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Movie from './Movie'
import MiniAddMovie from './MiniAddMovie'
import './Movies.css';

class Movies extends Component {
  state = {
    filmovi: [],
    filtered:[],
    isLoaded: false,
  }

  sortByYearAsc = () => {
    let arr = this.state.filmovi.sort((a, b)=> {
      return a.godina - b.godina;
      });
    this.setState({ filmovi: arr })
    }
  
  sortByYearDesc =() => {
    let arr = this.state.filmovi.sort((a, b)=>{
      return b.godina - a.godina;
        });
      this.setState({filmovi: arr })
    }
  
  sortAlpha =()=> {
     let arr = this.state.filmovi.sort((a, b)=> {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (x < y)
          return -1;
        if (x > y)
          return 1;
        return 0;
      })
      this.setState({filtered: arr})
    }
    sortAlphaZ=()=> {
     let arr = this.state.filmovi.sort((a, b)=> {
        var x = a.naziv.toLowerCase();
        var y = b.naziv.toLowerCase();
        if (y < x)
          return -1;
        if (y > x)
          return 1;
        return 0;
      })
  
      this.setState({filtered: arr})
    }
    searchMovie = event => {
      let filtered = this.state.filmovi.filter((movie)=>{
        return movie.naziv.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
      })
      this.setState({
        filtered
        })
    }

  componentDidMount() {
    fetch('https://baza-podataka.herokuapp.com/filmovi/')
    .then(response => response.json())
    .then(json => this.setState({
      filmovi: json,
      filtered: json,
      isLoaded: true
    }))
  }

  render() {
    const filmoviJsx = this.state.filtered.map(film => {
      const {naziv, godina, slika, _id} = film
      return (
        <Link key={_id} to={{ 
            pathname:`/singlemovie/${naziv}`, 
            state: {naziv, godina, slika, _id}}
        }>
          <Movie podaci={{naziv, godina, slika, _id}} />
        </Link>
    )})

    return (
      <div>
        <MiniAddMovie/>
        <div>
          <button onClick={this.sortByYearAsc}>Sort by year Asc</button>
          <button onClick={this.sortByYearDesc}>Sort by year Desc</button>
          <button onClick={this.sortAlpha}>Sort A-Z</button>
          <button onClick={this.sortAlphaZ}>Sort Z-A</button>
        </div>
        <input  type="text" 
          placeholder="Search for movie" 
          onChange = {this.searchMovie}
        />
        
        <div className="movies-wrapper">
          {!this.state.isLoaded ? 'Učitava se...' : null}
          {filmoviJsx}
        </div>
      </div>
    )
  }
}

export default Movies