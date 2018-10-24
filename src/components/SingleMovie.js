import React, { Component } from "react";

class SingleMovie extends Component {
  state = {};

  render() {
    console.log("PROPS", this.props.location.state);
    return (
      <div>
        <h1>Single Movie</h1>
      </div>
    );
  }
}

export default SingleMovie;
