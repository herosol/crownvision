import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import truckImage from "../../assets/images/blog/6.png";

export default class LazyImage extends Component {
  render() {
    return (
      <>
        <LazyLoadImage src={truckImage} effect="blur" />
      </>
    );
  }
}
