import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Baza filmova</h1>
        <h2>Zdravo {this.props.ime}</h2>
      </header>
    )
  }
}

export default Header