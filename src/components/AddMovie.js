import React, {Component} from 'react'
import addMovie from '../shared/addMovie'
import './AddMovie.css';
import fotoaparat from '../assets/fotoaparat.png'

class AddMovie extends Component {
  state = {
   movieName:"",
   movieImg:"",
   movieYear:"",
  }

  handleInput = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  addMovie = e => {
    e.preventDefault()
    addMovie(this.state.movieName, this.state.movieYear, this.state.movieImg)
  }

  render() {
    let src = this.state.movieImg !== "" ? this.state.movieImg : fotoaparat
    return (
      <form onSubmit={this.addMovie}>
        <h2>Dodaj film</h2>
        <input className="input"  name="movieName" onChange={this.handleInput} placeholder="Add title" required/>
        <input type="number" className="input" name="movieYear"  onChange={this.handleInput} placeholder="Add year" required/>
        <input className="input" name="movieImg"   onChange={this.handleInput} placeholder="Add img url" required/>
        <div className="imagePreviewDiv">
          <img className="imagePreview" src={src} alt={this.state.movieName} />
        </div>
        <button type="submit">Confirm</button>
      </form>
    )
  }
}

export default AddMovie