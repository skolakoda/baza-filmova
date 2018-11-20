import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  sortByYearDesc,
  sortByYearAsc,
  sortAlpha,
  sortAlphaZ,
  searchMovie
} from "../store/actions";

class Filter extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.props.sortByYearAsc}>Sort by year Asc</button>
          <button onClick={this.props.sortByYearDesc}>Sort by year Desc</button>
          <button onClick={this.props.sortAlpha}>Sort A-Z</button>
          <button onClick={this.props.sortAlphaZ}>Sort Z-A</button>
        </div>
        <input
          type="text"
          placeholder="Search for movie"
          onChange={e => this.props.searchMovie(e.target.value)}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  sortByYearDesc,
  sortByYearAsc,
  sortAlpha,
  sortAlphaZ,
  searchMovie
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);
