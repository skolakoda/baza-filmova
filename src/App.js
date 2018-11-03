import React, { Component } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer umanjenje={this.counterMin} uvecanje={this.counterMax} />
      </div>
    );
  }
}

export default App;
