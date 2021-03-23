import React, { Component } from "react";
import { Info } from "./Info";
import { Loading } from "./Loading";
import { fetchFromApi } from "./fetchFromApi";

class Container extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  // We want to call the fake api when the app is Container is loaded
  // fetchFromApi()

  render() {
    return (
      <div className="wrapper">
        {!this.state.loading && <Info />}
        {this.state.loading && <Loading />}
      </div>
    );
  }
}

export default Container;
