import React, { Component } from 'react';

import './App.css';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Header from './components/Header';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AddMovie/>
        <Movies/>
        <Footer/>
      </div>
    );
  }
}


export default App;
