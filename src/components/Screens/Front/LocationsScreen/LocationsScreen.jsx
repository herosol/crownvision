import React, { Component } from "react";
import LocationScreenSkeleton from "../../../../skeletons/LocationsScreenSkeleton";

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
              <form method="post" action className="txtGrp flexGrp">
                <img
                  src={
                    require("../../../../assets/images/icon-search.svg").default
                  }
                  alt=""
                />
                <label htmlFor>Search for locations</label>
                <input type="text" name id className="txtBox" />
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
        {/* locations */}
        <section id="similar" style={{ display: "none" }}>
          <div className="contain">
            <h4 className="bold">And many other cities</h4>
            <div
              id="owl-locations"
              className="owl-carousel owl-theme owl-loaded owl-drag"
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
                            'url("images/locations/maryland.jpg")',
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
                            'url("images/locations/louisiana.jpg")',
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
                            'url("images/locations/san_diego.jpg")',
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
                          backgroundImage: 'url("images/locations/dallas.jpg")',
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
                            'url("images/locations/south_carolina.jpg")',
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
                          backgroundImage: 'url("images/locations/alaska.jpg")',
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
                            'url("images/locations/maryland.jpg")',
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
                            'url("images/locations/louisiana.jpg")',
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
                            'url("images/locations/san_diego.jpg")',
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
                          backgroundImage: 'url("images/locations/dallas.jpg")',
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
                    className="owl-item cloned"
                    style={{ width: "252.5px", marginRight: "20px" }}
                  >
                    <div className="cityBlk">
                      <div
                        className="image"
                        style={{
                          backgroundImage:
                            'url("images/locations/south_carolina.jpg")',
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
                    className="owl-item cloned"
                    style={{ width: "252.5px", marginRight: "20px" }}
                  >
                    <div className="cityBlk">
                      <div
                        className="image"
                        style={{
                          backgroundImage: 'url("images/locations/alaska.jpg")',
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
                    className="owl-item cloned"
                    style={{ width: "252.5px", marginRight: "20px" }}
                  >
                    <div className="cityBlk">
                      <div
                        className="image"
                        style={{
                          backgroundImage:
                            'url("images/locations/maryland.jpg")',
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
                            'url("images/locations/louisiana.jpg")',
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
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots">
                <button role="button" className="owl-dot active">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* similar */}
      </main>
    ) : (
      <main common locations>
        <LocationScreenSkeleton />
      </main>
    );
  }
}
