import React, { Component } from "react";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";

export default class BlogScreen extends Component {
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
              require("../../../../assets/images/photo-1530685932526-48ec92998eaa.jpg")
                .default +
              ")",
          }}
        >
          <div className="contain">
            <div className="content">
              <h1>
                Our <em>Blog</em>
              </h1>
            </div>
          </div>
        </section>
        {/* sBanner */}
        <section className="blog">
          <div className="contain">
            <div className="flexRow flex">
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <img
                    src={
                      require("../../../../assets/images/blog/1.png").default
                    }
                  />
                </a>
                <div className="cntnt">
                  <h3>
                    <a href="blog-detail.php">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </a>
                  </h3>
                  <p className="smInfo">
                    <span>By : Alex Andrew </span>
                    <span>22 Apr 2019</span>
                    <span>2h 7m ago</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                  </p>
                  <div className="bTn">
                    <a href="blog-detail.php" className="webBtn colorBtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <a
                  href="blog-detail.php"
                  className="image"
                  style={{ display: "block" }}
                >
                  <img
                    src={
                      require("../../../../assets/images/blog/2.png").default
                    }
                  />
                </a>
                <div className="cntnt">
                  <h3>
                    <a href="blog-detail.php">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </a>
                  </h3>
                  <p className="smInfo">
                    <span>By : Alex Andrew </span>
                    <span>22 Apr 2019</span>
                    <span>2h 7m ago</span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed.
                  </p>
                  <div className="bTn">
                    <a href="blog-detail.php" className="webBtn colorBtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="outerLstBlog">
              <div className="lstBlog">
                <div className="colImg">
                  <img
                    src={
                      require("../../../../assets/images/blog/3.png").default
                    }
                  />
                </div>
                <div className="cntnt">
                  <h3>
                    <a href="blog-detail.php">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </a>
                  </h3>
                  <p className="smInfo">
                    <span>By : Alex Andrew </span>
                    <span>22 Apr 2019</span>
                    <span>2h 7m ago</span>
                  </p>
                  <p>
                    Lempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                    sit amet, consetetur sadipscing elitr, sed.
                  </p>
                  <div className="bTn">
                    <a href="blog-detail.php" className="webBtn colorBtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="lstBlog">
                <div className="colImg">
                  <img
                    src={
                      require("../../../../assets/images/blog/4.png").default
                    }
                  />
                </div>
                <div className="cntnt">
                  <h3>
                    <a href="blog-detail.php">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </a>
                  </h3>
                  <p className="smInfo">
                    <span>By : Alex Andrew </span>
                    <span>22 Apr 2019</span>
                    <span>2h 7m ago</span>
                  </p>
                  <p>
                    Lempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                    sit amet, consetetur sadipscing elitr, sed.
                  </p>
                  <div className="bTn">
                    <a href="blog-detail.php" className="webBtn colorBtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="lstBlog">
                <div className="colImg">
                  <img
                    src={
                      require("../../../../assets/images/blog/5.png").default
                    }
                  />
                </div>
                <div className="cntnt">
                  <h3>
                    <a href="blog-detail.php">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </a>
                  </h3>
                  <p className="smInfo">
                    <span>By : Alex Andrew </span>
                    <span>22 Apr 2019</span>
                    <span>2h 7m ago</span>
                  </p>
                  <p>
                    Lempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                    sit amet, consetetur sadipscing elitr, sed.
                  </p>
                  <div className="bTn">
                    <a href="blog-detail.php" className="webBtn colorBtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog */}
      </main>
    ) : (
      <main>
        <LocationScreenSkeleton />
      </main>
    );
  }
}
