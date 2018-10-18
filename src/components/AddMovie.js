import React, {Component} from 'react'
import './Movies.css';

class AddMovie extends Component {
  state = {
   movieName:"",
   movieImg:"",
   movieYear:"",
   visible:false,
  }

  
  togle = (imefilmna) => {
    this.setState({
      visible:!this.state.visible
    })
  }

  handleInput = (event )=> {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]:value});
    
  }
  
  addMovie =  ()  => {
    fetch('https://baza-podataka.herokuapp.com/dodaj-film/', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        naziv: this.state.movieName, 
        godina: this.state.movieYear, 
        slika: this.state.movieImg
      })
    })
    alert(`Movie " ${this.state.movieName.toUpperCase()}" has been updated to movie base.
          Thank you for updating!`);
  }

  render() {
    let { visible } = this.state
    return (
      <div>
        <button onClick={this.togle}>Add Movie</button>
          <div style={ visible ? {display:"block"} : {display:"none"} }>
            <form onSubmit={this.addMovie}>
                  <input  name="movieName"  onBlur={this.handleInput} placeholder="Add title"required/>
                  <input  name="movieYear"  onBlur={this.handleInput} placeholder="Add year" required/>
                  <input  name="movieImg"   onBlur={this.handleInput} placeholder="Add img url" required/>
                  <input className="inputSubmit" type="submit" value="Confirm"/>
             </form>
          </div>
                </div>
    )
  }
}

export default AddMovie