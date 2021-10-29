import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default class LazyImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LazyLoadImage
          src={`${
            process.env.REACT_APP_IMAGES_URL
          }${this.props.src.toString()}`}
          alt={this.props.alt}
          effect="opacity"
        />
      </>
    );
  }
}
