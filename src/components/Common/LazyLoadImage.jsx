import React, { Component } from "react";
import LazyLoad from "react-lazyload";

export default class LazyImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LazyLoad>
          <img src={this.props.src} alt={this.props.alt} />
        </LazyLoad>
      </>
    );
  }
}
