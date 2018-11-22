import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "./store/actions";

import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMovies
};

export default connect(
  null,
  mapDispatchToProps
)(App);
