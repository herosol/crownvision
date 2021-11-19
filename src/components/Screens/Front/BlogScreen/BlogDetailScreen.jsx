import React, { Component } from "react";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBlogDetail } from "../../../../states/actions/blogScreenActions";
import Moment from "moment";
import Text from "../../../Common/Text";
import * as helpers from "../../../../utils/Helpers";

class BlogDetailScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const blogId = window.location.pathname.split("/").pop();
    this.props.fetchBlogDetail(blogId);
  }

  render() {
    const { skeleton } = this.props;
    const { page_title, meta_description, row } = this.props.content;
    console.log(this.props.content);

    if (!skeleton) {
      helpers.setPageTitle({ page_title, meta_description });
    }

    return skeleton ? (
      <main common locations>
        <LocationScreenSkeleton />
      </main>
    ) : (
      <main className="common" blog>
        <section
          id="sBanner"
          style={{
            backgroundImage:
              "url(" +
              require("../../../../assets/images/photo-1530685932526-48ec92998eaa.jpg")
                .default +
              ")"
          }}
        >
          <div className="contain">
            <div className="content">
              <h1>{row.title}</h1>
            </div>
          </div>
        </section>
        {/* sBanner */}
        <section id="blog">
          <div className="contain">
            <div className="flexRow flex">
              <div className="col col1">
                <div className="newsBlk mainBlk">
                  <div className="image">
                    <img
                      src={`${process.env.REACT_APP_IMAGES_URL}${process.env.REACT_APP_BLOGS_IMAGES}/${row.image}`}
                    />
                  </div>
                  <div className="txt">
                    <small className="date">
                      {Moment(row.created_date).format("MMMM D, YYYY")}
                    </small>
                    <h3>
                      <Text string={row.title} />
                    </h3>
                    <Text parse={true} string={row.description} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog */}
      </main>
    );
  }
}

BlogDetailScreen.propTypes = {
  skeleton: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  content: PropTypes.object
};

const mapStateToProps = ({ blog }) => ({
  skeleton: blog.skeleton,
  error: blog.error,
  content: blog.content
});

export default connect(mapStateToProps, { fetchBlogDetail })(BlogDetailScreen);
