import React, { Component } from "react";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";
import LazyImage from "../../../Common/LazyLoadImage";
import ClientsReviewsSlider from "./ClientsReviewsSlider";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPageContent } from "../../../../states/actions/galleryScreenActions";
import * as helpers from "../../../../utils/Helpers";
import Moment from "moment";
import Text from "../../../Common/Text";

class GalleryScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPageContent();
  }

  render() {
    const { skeleton } = this.props;
    const { page_title, meta_description, gallery } = this.props.content;

    if (!skeleton) {
      helpers.setPageTitle({ page_title, meta_description });
    }

    console.log(gallery);
    let Gallery = [];
    if (gallery) {
      Gallery = Object.values(gallery).map((gObj, index) => {
        return (
          <div className="col" key={index}>
            <a
              href="blog-detail.php"
              className="image"
              style={{ display: "block" }}
            >
              <LazyImage
                src={`${process.env.REACT_APP_IMAGES_URL}${process.env.REACT_APP_GALLERY_IMAGES}${gObj.image}`}
              />
            </a>
            <div className="cntnt">
              <p className="smInfo">
                <span>New York City, USA</span>
                <span>{Moment(gObj.created_date).format("MMMM D, YYYY")}</span>
              </p>
              <h3>
                <a href="blog-detail.php">
                  <Text string={gObj.title} />
                </a>
              </h3>
              <p>
                <Text string={gObj.description} length={80} />
              </p>
            </div>
          </div>
        );
      });
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
              require("../../../../assets/images/gallery.jpg").default +
              ")"
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
            <div className="flexRow flex">{Gallery}</div>
            <div className="clientsReviews">
              <h2 className="heading text-center">Happy Clients Reviews</h2>
              <ClientsReviewsSlider />
            </div>
          </div>
        </section>
        {/* blog */}
      </main>
    );
  }
}

GalleryScreen.propTypes = {
  skeleton: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  skeleton: PropTypes.object
};

const mapStateToProps = ({ gallery }) => ({
  skeleton: gallery.skeleton,
  error: gallery.error,
  content: gallery.content
});

export default connect(mapStateToProps, { fetchPageContent })(GalleryScreen);
