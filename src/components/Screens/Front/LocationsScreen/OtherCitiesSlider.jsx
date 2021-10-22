import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export class OtherCitiesSlider extends Component {
  render() {
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
                <div
                  className="owl-item cloned"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations//maryland.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        Annapolis, Maryland{" "}
                        <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/louisiana.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        New Orleans, Louisiana{" "}
                        <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/san_diego.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        San Diego <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/dallas.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        Dallas <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/south_carolina.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        Greenville, South Carolina{" "}
                        <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/alaska.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        Anchorage, Alaska{" "}
                        <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/maryland.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        Annapolis, Maryland{" "}
                        <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/louisiana.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        New Orleans, Louisiana{" "}
                        <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/san_diego.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        San Diego <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "252.5px", marginRight: "20px" }}
                >
                  <div className="cityBlk">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("../../../../assets/images/locations/dallas.jpg")
                            .default +
                          ")",
                      }}
                    />
                    <div className="txt">
                      <h6>
                        Dallas <small>Average Price start from $490</small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default OtherCitiesSlider;
