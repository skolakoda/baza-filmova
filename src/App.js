import React, { Component } from 'react';

import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  state = {
    counter:0,
  }
  counterMin = () => {
    console.log("COUNTER",this.state.counter)
   this.setState({
     counter:this.state.counter-1
   })
  }
  counterMax = () => {
    console.log("COUNTER",this.state.counter)
    this.setState({
      counter:this.state.counter+1
    })
   }
  render() {
    return (
      <div className="App">
        <Header counter={this.state.counter}/>
        <Main />
        <Footer umanjenje={this.counterMin} uvecanje={this.counterMax}/>
      </div>
    );
  }
}

export default App;
