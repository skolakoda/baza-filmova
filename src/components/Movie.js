import React, {Component} from 'react'

import {deleteUrl} from '../config/api'

class Movie extends Component {
  deleteMovie = e => {
    e.preventDefault()
    const {naziv, _id} = this.props.podaci
    if(window.confirm(`Delete movie: "${naziv}" ?`)){
      fetch(deleteUrl, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: _id})
      })
      .then(res => res.text())
      .then(res => {
        alert(res)
        window.location.reload()
      })
    }
  }

  render() {
    const {naziv, godina, slika} = this.props.podaci
    return (
      <div>
        <h3>{naziv}</h3>
        <div className="image-holder">
        <span onClick={this.deleteMovie} className="delete-btn" title="Delete movie">X</span>
        <img src={slika} alt={naziv} />
        </div>
        <p>{godina}</p>
      </div>
    )
  }
}

export default Movie