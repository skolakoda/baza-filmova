import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import Movie from './Movie'
import addMovie from '../shared/addMovie'

class SingleMovie extends Component {
  state = {
  }

  handleSubmit = e => {
    e.preventDefault()
    const {naziv, godina, slika, comments} = this.props.location.state

    const noviKomentar = {
      user: e.target.ime.value, 
      comment: e.target.komentar.value
    }
    const komentari = comments ? [...comments, noviKomentar] : [noviKomentar]
    addMovie(naziv, godina, slika, komentari)
  }

  render() {
    let komentariJsx

    try {
      komentariJsx = this.props.location.state.comments.map(k => 
        <div>
          <small>{k.user}</small>
          <p>{k.comment}</p>
        </div>
      )
    } catch (error) {
      komentariJsx = <p>Budite prvi koji će ostaviti komentar</p>
    }
    
    return (
     <div>
        <Link to='/'>&lt; Back</Link>{' '}
        <Movie podaci={this.props.location.state} />

        {komentariJsx}

        <form onSubmit={this.handleSubmit}>
          <h3>Dodaj komentar</h3>
          <label>Ime:</label><br/>
          <input name="ime" /><br/>
          <label>Komentar: </label><br/>
          <textarea name="komentar" /><br/>
          <button>Submit</button>
        </form>

     </div>
    )
  }
}

export default SingleMovie