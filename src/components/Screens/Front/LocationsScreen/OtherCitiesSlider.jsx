import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LazyImage from "../../../Common/LazyLoadImage";

export class OtherCitiesSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let sliderImages = [];
    sliderImages = Object.values(this.props.images).map((image, index) => {
      return (
        <div
          key={index}
          className="owl-item cloned"
          style={{ width: "252.5px", marginRight: "20px" }}
        >
          <div className="cityBlk">
            <div className="image">
              <LazyImage
                src={`${process.env.REACT_APP_IMAGES_LOCATIONS}thumbs/${image.image}`}
                alt={image.name}
              />
              <div className="txt">
                <h6>
                  {image.name}
                  <small>Average Price start from ${image.price}</small>
                </h6>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div class="container-fluid">
          <OwlCarousel
            loop={true}
            margin={20}
            // nav={true}
            className="owl-theme owl-carousel owl-loaded owl-drag"
            smartSpeed={1000}
            autoplayTimeout={8000}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              991: {
                items: 3,
              },
              1200: {
                items: 4,
              },
            }}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1090px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "3815px",
                }}
              >
                {sliderImages}
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default OtherCitiesSlider;
