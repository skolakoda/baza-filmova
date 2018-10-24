import React, { Component } from "react";
class Footer extends Component {
  render() {
    let { umanjenje, uvecanje } = this.props;
    const datum = new Date().toLocaleDateString("sr");

    return (
      <footer>
        <p>Danas je {datum} </p>
        <button onClick={umanjenje}>UMANJI</button>
        <button onClick={uvecanje}>UVECANJE</button>
      </footer>
    );
  }
}

export default Footer;
