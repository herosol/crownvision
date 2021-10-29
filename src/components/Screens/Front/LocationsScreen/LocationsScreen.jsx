import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocationsContent } from "../../../../states/actions/locationsScreenActions";
import { setPageTitle } from "../../../../utils/Helpers";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";
import OtherCitiesSlider from "./OtherCitiesSlider";

const mapStateToProps = (state) => ({
  skeleton: state.locationsScreen.skeleton,
  error: state.locationsScreen.error,
  content: state.locationsScreen.content,
});

class LocationsScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocationsContent();
  }

  render() {
    const { skeleton, error } = this.props;
    const { content, locations, page_title, meta_description } =
      this.props.content;

    if (!skeleton) {
      setPageTitle({ page_title, meta_description });
    }

    return skeleton ? (
      <main>
        <LocationScreenSkeleton />
      </main>
    ) : (
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
                {content.header_title} <em>{content.header_bold_title}</em>
              </h1>
              <p>{content.header_detail}</p>
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
            <h4 className="bold">{content.section1_title}</h4>
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
            <h4 className="bold">{content.section2_title}</h4>
            <OtherCitiesSlider images={locations} />
          </div>
        </section>
      </main>
    );
  }
}

export default connect(mapStateToProps, { fetchLocationsContent })(
  LocationsScreen
);
