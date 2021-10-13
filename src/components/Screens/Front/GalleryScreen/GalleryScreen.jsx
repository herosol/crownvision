import React, { Component } from "react";
import LocationScreenSkeleton from "../../../../skeletons/LocationsScreenSkeleton";
import LazyImage from "../../../Common/LazyLoadImage";

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
            </div>
            <div className="clientsReviews hidden">
              <h2 className="heading text-center">Happy Clients Reviews</h2>
              <div
                id="owl-folioClient"
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
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "525px", marginRight: "20px" }}
                    >
                      <div className="item">
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                        <div className="inner">
                          <div className="icoBlk">
                            <div className="ico">
                              <img src="images/testi1.svg" alt="" />
                            </div>
                            <div className="txt flex">
                              <div className="txtMain">
                                <h4>Bernardo Mraz</h4>
                                <div
                                  className="rateYo jq-ry-container"
                                  readOnly="readonly"
                                  style={{ width: "108px" }}
                                >
                                  <div className="jq-ry-group-wrapper">
                                    <div className="jq-ry-normal-group jq-ry-group">
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ddd"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                    <div
                                      className="jq-ry-rated-group jq-ry-group"
                                      style={{ width: "100%" }}
                                    >
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                      {/*?xml version="1.0" encoding="utf-8"?*/}
                                      <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 12.705 512 486.59"
                                        x="0px"
                                        y="0px"
                                        xmlSpace="preserve"
                                        width="20px"
                                        height="20px"
                                        fill="#ffce31"
                                        style={{ marginLeft: "2px" }}
                                      >
                                        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 " />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>5 min ago</p>
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              Amazed by the customer service , had no issues ,
                              well advertised and it is good that I can Tracy
                              Lorem ipsum dolor sit amet.
                            </p>
                          </div>
                          <div className="openion flex">
                            <div className="reaction">
                              <img src="images/heart.svg" />
                              <span>89</span>
                            </div>
                            <div className="reaction">
                              <img src="images/dislike.svg" />
                              <span>02</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="fi-chevron-left" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fi-chevron-right" />
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
