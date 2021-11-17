import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import truckImage from "../../assets/images/blog/3.png";

export default class LazyImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <LazyLoadImage src={truckImage} alt={this.props.alt} effect="opacity" />
      </>
    );
  }
}
