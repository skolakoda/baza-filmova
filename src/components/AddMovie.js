import React, {Component} from 'react'
import './AddMovie.css';

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
    .then(res => {
      alert(`Movie " ${this.state.movieName.toUpperCase()}" has been updated to movie base. Thank you for updating!`)
      window.location.reload()
    })
    .catch(e => alert('Došlo je do greške'))
  }

  render() {
    let src = this.state.movieImg !== "" ? this.state.movieImg : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX39/e6urqtra23t7ewsLCysrK1tbXu7u68vLzv7+/7+/vY2Ni/v7/8/Pyrq6vg4ODMzMzT09Pj4+PIyMjo6OilpaXOEdeAAAAEQElEQVR4nO3b25KjKhiGYRQQBSLb3P+tDqjZTdAkM6myMN9zsNbBdKqa11/UVEsIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDPkNnev8SeJJFRmRjJz1YYnFODbpJ+719lL9JSalyfNeqnBmE+//N/BKXW034WfymCyUh0Lv0vRr0k6MPpZ7ZGEfKClaLN7JKgb5zxUQhCTsmhLxXS9jrx18N/M/XI/6itVcp7MQzD9BF5sKunnBap/XOCv3o0DaWpSLDp0qHyhNwGpPYcSwPzosF9i7uTJoS8i6Qz5m5C9l7R5z5sUByPeUCCtVOQ095L+tjUoE8NmtcrfmM8Ug897L2mT+UG/dTgW6irbRK+36Dp0aBpam3wxQS6ugbTnvbNBjSgwYEb0IsDN6Av6JDukZWzoele/KSr7VbxvQba+uV2mJDB2P54DdJWvt0gFSDpoTH6/E1DzM/bW7NQY4MmN9gaAuNTAGHSmeBspgTx/WqFzlTXYNrHthpoY/IMqMXUwRCh1yIcsEFvVD4PUgVzV8EJshah0gZpoWsJGuXEsBDXCjmCWNkZedx7TZ+a52C1QWddHG7iXQQS+VEa0O05UJbcNbiOgst7gi2eDTU2yNYapDHww6NbhCjKF1Sx95o+dW3QlVAVhr8tEdIlklhe+szBGqQdkYhHl9MhDQKJ7AcaaGcG8eQyCJE0pW71fZ+42cCG+NxguTo460konAwVfqeahpd2jSkm4FaLwhzMZ4NLG4J6bsArbUBXG4RSAhEvDcxRGuRz2HS8ZGUO5mtDngP2/Jmw95I+Jvlmg1BsMA9Cukv6hQbalq4Ly46Q9kR3kAZ8o0Hjnu4PZj43EOm6UJid2h4brw2KCXinQrlBPhncQOjzR1iVDRK60oDlp4Ki1MAQ3/5AA06fb5avDYQMhe2AVfd1IpFsswFLdwjFXdE4T3xpE2H1/VHf6UWDbmUQjCJSF8aAt4drwFlvTCmCF8QVdoO6G7AVbVBDIcIgVfkjra+vQZsisI0GrNWePEUgRLUrP37EBqztFSEPG2N6KrJrH6izQdJtNWBtG7yUlwz5sdD0K1PA2CiqbbCRIFfgWl2/IhNKs9UEbKzu0fnNBnkW2j5Yp2zQvF0vUHMD9arBnGGy/VPj3iv63NSgTQ3aLxlr+yuU3KD9boNzlQ0Srr6VoNI5+G4DigZjdX+V9t0GY0LruzSS05h/+X9tMF6kjZXzXltX47uhHzcYb85n3mm9vMpC5PRmz97r+ReSje81uB5w3nVNumVUxi9jX+kbPDcyrDe4O+DntsuTfnuZq/Z1PxA0nw2Gj4UjTps+v9eXJz072jt9NyKk42zt+XLER96kI27yER/ySX7UdT+QMhpDfH4qNHGQJ3m4lzjfkt/5/pEjDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwH/4Ayw5qzf07zNIAAAAASUVORK5CYII="
    return (
      <form onSubmit={this.addMovie}>
        <h2>Dodaj film</h2>
        <input className="input"  name="movieName" onChange={this.handleInput} placeholder="Add title" required/>
        <input className="input" name="movieYear"  onChange={this.handleInput} placeholder="Add year" required/>
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