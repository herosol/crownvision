import React, { Component } from "react";
import LocationScreenSkeleton from "../../../../skeletons/LocationsScreenSkeleton";
import LazyImage from "../../../Common/LazyLoadImage";
import ClientsReviewsSlider from "./ClientsReviewsSlider";

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
              require("../../../../assets/images/gallery.jpg").default +
              ")",
          }}
        >
          <div className="contain">
            <div className="flex galleryBanner">
              <div className="colL">
                <div className="truckImage">
                  <img
                    src={
                      require("../../../../assets/images/White-box.png").default
                    }
                  />
                </div>
              </div>
              <div className="colR">
                <ul>
                  <li>
                    <div className="galleryIco">
                      <img
                        src={
                          require("../../../../assets/images/mile.svg").default
                        }
                      />
                    </div>
                    <div className="galleryLst">
                      <h2>10 Million+</h2>
                      <p>Miles covered yearly</p>
                    </div>
                  </li>
                  <li>
                    <div className="galleryIco">
                      <img
                        src={
                          require("../../../../assets/images/smile.svg").default
                        }
                      />
                    </div>
                    <div className="galleryLst">
                      <h2>5000+</h2>
                      <p>Happy clients yearly</p>
                    </div>
                  </li>
                  <li>
                    <div className="galleryIco">
                      <img
                        src={
                          require("../../../../assets/images/delivery.svg")
                            .default
                        }
                      />
                    </div>
                    <div className="galleryLst">
                      <h2>200 Trucks</h2>
                      <p>More than 200 trucks currently active</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* sBanner */}
        <section className="gallery">
          <div className="contain">
            <h2 className="heading">Gallery</h2>
            <div className="flexRow flex">
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/6.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>New York City, USA</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">Campaign on MI Homes</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/7.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>New York City, USA</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <LazyImage />
                  {/* <img
                    src={
                      require("../../../../assets/images/blog/8.png").default
                    }
                  /> */}
                </a>
                <div className="cntnt">
                  <p className="smInfo">
                    <span>Tesco</span>
                    <span>02 Jun 2019</span>
                  </p>
                  <h3>
                    <a href="blog-detail.php">French Frey Heaven</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="clientsReviews">
              <h2 className="heading text-center">Happy Clients Reviews</h2>
              <ClientsReviewsSlider />
            </div>
          </div>
        </section>
        {/* blog */}
      </main>
    ) : (
      <main common locations>
        <LocationScreenSkeleton />
      </main>
    );
  }
}
