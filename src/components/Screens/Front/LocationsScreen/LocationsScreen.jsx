import React, { Component } from "react";
import LocationScreenSkeleton from "../../../../skeletons/LocationsScreenSkeleton";
import OtherCitiesSlider from "./OtherCitiesSlider";

export default class LocationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return this.state.loading === false ? (
      <main className="common">
        <section
          id="sBanner"
          style={{
            backgroundImage:
              "url(" +
              require("../../../../assets/images/New-Orleans-Bourbon-St-H.jpg")
                .default +
              ")",
          }}
        >
          <div className="contain">
            <div className="content">
              <h1>
                Explore <em>Our Locations</em>
              </h1>
              <p>And find the best place to show Your Vision</p>
              <form method="post" className="txtGrp flexGrp">
                <img
                  src={
                    require("../../../../assets/images/icon-search.svg").default
                  }
                  alt=""
                />
                <label htmlFor="">Search for locations</label>
                <input type="text" name="" className="txtBox" />
              </form>
            </div>
          </div>
        </section>
        {/* sBanner */}
        <section id="locations">
          <div className="contain">
            <h4 className="bold">Top Cities we Advertise</h4>
            <div className="flexRow flex text-center">
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/los_angeles.jpg")
                          .default +
                        ")",
                    }}
                  />
                  <div className="txt">
                    <h6>
                      Los Angeles <small>Average Price start from $490</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/kansas_city.jpg")
                          .default +
                        ")",
                    }}
                  />
                  <div className="txt">
                    <h6>
                      Kansas city <small>Average Price start from $490</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/atlanta.jpg")
                          .default +
                        ")",
                    }}
                  />
                  <div className="txt">
                    <h6>
                      Atlanta <small>Average Price start from $490</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/los_angeles.jpg")
                          .default +
                        ")",
                    }}
                  />
                  <div className="txt">
                    <h6>
                      Coloumbus <small>Average Price start from $490</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/atlanta.jpg")
                          .default +
                        ")",
                    }}
                  />
                  <div className="txt">
                    <h6>
                      New York <small>Average Price start from $490</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/los_angeles.jpg")
                          .default +
                        ")",
                    }}
                  />
                  <div className="txt">
                    <h6>
                      San Antonio <small>Average Price start from $490</small>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/atlanta.jpg")
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
              <div className="col">
                <div className="cityBlk">
                  <div
                    className="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("../../../../assets/images/locations/los_angeles.jpg")
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
        </section>
        <section id="similar">
          <div className="contain">
            <h4 className="bold">And many other cities</h4>
            <OtherCitiesSlider />
          </div>
        </section>
      </main>
    ) : (
      <main>
        <LocationScreenSkeleton />
      </main>
    );
  }
}
