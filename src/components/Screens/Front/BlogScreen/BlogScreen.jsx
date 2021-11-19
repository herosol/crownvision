import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";
import * as helpers from "../../../../utils/Helpers";
import Moment from "moment";
import Text from "../../../Common/Text";

import { fetchBlogs } from "../../../../states/actions/blogScreenActions";
import LazyImage from "../../../Common/LazyLoadImage";
import { Link } from "react-router-dom";

class BlogScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    const { skeleton } = this.props;
    const { page_title, meta_description, blogs, recentBlogs, row } =
      this.props.content;

    if (!skeleton) {
      helpers.setPageTitle({ page_title, meta_description });
    }

    let BlogsRow = [];
    if (blogs) {
      BlogsRow = Object.values(blogs)
        .slice(0, 2)
        .map((blog, index) => {
          return (
            <div key={index} className="col">
              <Link to={`/blogs/detail/${blog.id}`}>
                <LazyImage
                  src={`${process.env.REACT_APP_IMAGES_URL}${process.env.REACT_APP_BLOGS_IMAGES}large/${blog.image}`}
                />
              </Link>
              <div className="cntnt">
                <h3>
                  <Link to={`/blogs/detail/${blog.id}`}>
                    <Text string={blog.title} length={70} />
                  </Link>
                </h3>
                <p className="smInfo">
                  <span>By : Alex Andrew </span>
                  <span>
                    {Moment(blog.created_date).format("MMMM D, YYYY")}
                  </span>
                  <span>{Moment(blog.created_date).fromNow()}</span>
                </p>
                <Text parse={true} string={blog.description} length={300} />
                <div className="bTn">
                  <Link to={`/blogs/detail/${blog.id}`}>
                    <button className="webBtn colorBtn">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        });
    }

    let RecentBlogs = [];
    if (recentBlogs) {
      RecentBlogs = Object.values(recentBlogs).map((blog, index) => {
        return (
          <div className="lstBlog" key={index}>
            <div className="colImg">
              <LazyImage
                src={`${process.env.REACT_APP_IMAGES_URL}${process.env.REACT_APP_BLOGS_IMAGES}large/${blog.image}`}
              />
            </div>
            <div className="cntnt">
              <h3>
                <Link to={`/blogs/detail/${blog.id}`}>
                  <Text string={blog.title} length={70} />
                </Link>
              </h3>
              <p className="smInfo">
                <span>By : Alex Andrew </span>
                <span>{Moment(blog.created_date).format("MMMM D, YYYY")}</span>
                <span>{Moment(blog.created_date).fromNow()}</span>
              </p>
              <Text parse={true} string={blog.description} length={250} />
              <div className="bTn">
                <Link to={`/blogs/detail/${blog.id}`}>
                  <button className="webBtn colorBtn">Read More</button>
                </Link>
              </div>
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
            backgroundImage: `url(${process.env.REACT_APP_IMAGES_URL}images/${row.header_back_img})`
          }}
        >
          <div className="contain">
            <div className="content">
              <h1>
                {row.title} <em>{row.bold_title}</em>
              </h1>
            </div>
          </div>
        </section>
        <section className="blog">
          <div className="contain">
            <div className="flexRow flex">{BlogsRow}</div>
            <div className="outerLstBlog">{RecentBlogs}</div>
          </div>
        </section>
        {/* blog */}
      </main>
    );
  }
}

BlogScreen.propTypes = {
  skeleton: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  content: PropTypes.any
};

const mapStateToProps = ({ blog }) => ({
  skeleton: blog.skeleton,
  error: blog.error,
  content: blog.content
});

export default connect(mapStateToProps, { fetchBlogs })(BlogScreen);
