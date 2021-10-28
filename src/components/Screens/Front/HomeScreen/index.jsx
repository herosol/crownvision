import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHomeContent } from "../../../../states/actions/homeScreenActions";
import { Link } from "react-router-dom";
import HappyClientsSlider from "./HappyClientsSlider";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomeContent();
  }

  render() {
    const { skeleton, content } = this.props;
    console.log(content);
    return skeleton ? (
      <main>
        <LocationScreenSkeleton />
      </main>
    ) : (
      <main className="index">
        <section
          id="banner"
          style={{
            backgroundImage:
              "url(" +
              require("../../../../assets/images/Rectangle-365.jpg").default +
              ")",
          }}
        >
          <div className="contain">
            <div className="outer">
              <div className="content">
                <h1>
                  Let us help you{" "}
                  <span>
                    show others <strong>Your Vision</strong>
                  </span>
                </h1>
                <p>
                  Be seen by Thousands Daily, Prices Starting as Low as{" "}
                  <strong>$150</strong>
                </p>
                <div className="choose">
                  <strong>
                    {" "}
                    {/* <a href="design-ready.php">Have a design ready</a> */}
                    <Link to="/design/ready">Have a design ready?</Link>
                  </strong>
                  {/* <a href="design-ready.php"><strong>Have a design ready</strong></a> */}
                  <small>OR</small>
                  <a href="let-us-design-for-you-info.php">
                    Let us design for you
                  </a>
                </div>
              </div>
              <div className="image">
                <img
                  src={require("../../../../assets/images/truck.png").default}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* banner */}
        <section id="main_form">
          <div className="contain">
            <form action method="post">
              <div className="txtGrp">
                <label htmlFor className="move">
                  Location
                </label>
                <input
                  type="text"
                  name
                  id
                  className="txtBox"
                  placeholder="Where you want to advertise?"
                />
              </div>
              <div className="txtGrp">
                <label htmlFor className="move">
                  Start &amp; End Date
                </label>
                <select name id className="txtBox">
                  <option value>Select</option>
                  <option value>1</option>
                  <option value>2</option>
                  <option value>3</option>
                  <option value>4</option>
                  <option value>5</option>
                </select>
              </div>
              <div className="txtGrp">
                <label htmlFor className="move">
                  Start &amp; End Time
                </label>
                <select name id className="txtBox">
                  <option value>Select</option>
                  <option value>1</option>
                  <option value>2</option>
                  <option value>3</option>
                  <option value>4</option>
                  <option value>5</option>
                </select>
              </div>
              <div className="txtGrp">
                <label htmlFor className="move">
                  Attach design
                </label>
                <button
                  type="button"
                  className="txtBox uploadImg"
                  data-upload="file"
                  data-text="Browse Files"
                >
                  <img
                    src={
                      require("../../../../assets/images/icon-clip.svg").default
                    }
                    alt=""
                  />
                </button>
                <input
                  type="file"
                  name
                  id
                  className="uploadFile"
                  data-upload="file"
                />
              </div>
              <div className="bTn">
                <button type="submit" className="webBtn yellowBtn">
                  <img
                    src={
                      require("../../../../assets/images/icon-search.svg")
                        .default
                    }
                    alt=""
                  />
                  Book Slot
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* banner */}
        <section id="works">
          <div className="contain">
            <h2 className="heading text-center">How it works</h2>
            <div className="flexRow flex">
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img
                      src={
                        require("../../../../assets/images/work-location.svg")
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="txt">
                    <h6>Select Locations</h6>
                    <p>
                      A consequuntur, earum molestias at quas, fugit libero
                      ipsum deleniti totam aut sapiente dolorem adipisci!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img
                      src={
                        require("../../../../assets/images/work-clock.svg")
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="txt">
                    <h6>Select Dates &amp; Time</h6>
                    <p>
                      A consequuntur, earum molestias at quas, fugit libero
                      ipsum deleniti totam aut sapiente dolorem adipisci!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img
                      src={
                        require("../../../../assets/images/work-attach.svg")
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="txt">
                    <h6>Attach your design</h6>
                    <p>
                      A consequuntur, earum molestias at quas, fugit libero
                      ipsum deleniti totam aut sapiente dolorem adipisci!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="icon">
                    <img
                      src={
                        require("../../../../assets/images/work-chart.svg")
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="txt">
                    <h6>Book Slot to get Maximum Reach</h6>
                    <p>
                      A consequuntur, earum molestias at quas, fugit libero
                      ipsum deleniti totam aut sapiente dolorem adipisci!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* works */}
        <section
          id="folio"
          style={{
            backgroundImage:
              "url(" +
              require("../../../../assets/images/Mask-Group-6.jpg").default +
              ")",
          }}
        >
          <div className="contain-fluid">
            <h2 className="heading text-center">Happy Clients</h2>
            <HappyClientsSlider />
          </div>
        </section>
        {/* folio */}
        <section id="monitor">
          <div className="contain">
            <div className="flexRow flex">
              <div className="col col1">
                <div className="image">
                  <img
                    src={
                      require("../../../../assets/images/shutterstock_524477464.png")
                        .default
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col col2">
                <div className="content">
                  <h2 className="heading">Monitoring &amp; Reporting</h2>
                  <p>
                    When we work with a client, we ensure that everything we do
                    is transparent. crownvisionmedia supplies live tracking
                    through detailed reports to let you know the locations that
                    your ads have been getting your business exposure.
                  </p>
                  <p>
                    With detailed a heat map and a kilometre counter, you can
                    track your campaign in real-time. These reports enable us to
                    continuously optimise your campaign and ensure continuous
                    improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* monitor */}
        <section id="brands">
          <div className="contain text-center">
            <h2 className="heading">Brands that Trust us</h2>
            <div className="flexRow flex">
              <div className="col">
                <div className="icon">
                  <img
                    src={
                      require("../../../../assets/images/brands/optuno.svg")
                        .default
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="icon">
                  <img
                    src={
                      require("../../../../assets/images/brands/summit.png")
                        .default
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="icon">
                  <img
                    src={
                      require("../../../../assets/images/brands/childrens_ministry.png")
                        .default
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="icon">
                  <img
                    src={
                      require("../../../../assets/images/brands/nanohub.svg")
                        .default
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* brands */}
        <section
          id="need"
          style={{ backgroundImage: 'url("images/buildings.jpg")' }}
        >
          <div className="contain">
            <div className="outer">
              <div className="content">
                <h2 className="heading">Have any Question?</h2>
                <p>
                  We're here to help. Send us an email or call us at{" "}
                  <a href="tel:+44293888221">+44293888221</a>/{" "}
                  <a href="tel:+6327882990">+6327882990</a>/{" "}
                  <a href="mailto:mail@crownvision.com">mail@crownvision.com</a>
                  Please feel free to contact our expert.
                </p>
                <div className="bTn">
                  <a href="contact.php" className="webBtn simpleBtn">
                    <img
                      src={
                        require("../../../../assets/images/icon-phone.svg")
                          .default
                      }
                      alt=""
                    />
                    Contact us
                  </a>
                </div>
              </div>
              <div className="image">
                <img
                  src={
                    require("../../../../assets/images/professional_man.png")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  skeleton: state.homeScreen.skeleton,
  error: state.homeScreen.error,
  content: state.homeScreen.content,
});

export default connect(mapStateToProps, { fetchHomeContent })(HomeScreen);
