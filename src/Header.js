import React, {Component} from 'react'
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo" />
        <h1>Baza filmova</h1>
      </header>
    )
  }
}

export default Header