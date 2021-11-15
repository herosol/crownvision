import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILED,
  FETCH_BLOG_DETAIL,
  FETCH_BLOG_DETAIL_SUCCESS,
  FETCH_BLOG_DETAIL_FAILED,
  OFFLINE_ERROR,
  CLEAR_UNEXPECTED
} from ".";

export const fetchBlogs = () => (dispatch) => {
  loadProgressBar();
  dispatch({
    type: FETCH_BLOGS,
    payload: null
  });
  axios
    .get(process.env.REACT_APP_API_URL + process.env.REACT_APP_BLOGS_URL)
    .then(({ data }) => {
      dispatch({
        type: FETCH_BLOGS_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_BLOGS_FAILED,
        payload: error
      });
    });
};

export const fetchBlogDetail = (blogId) => (dispatch) => {
  dispatch({
    type: FETCH_BLOG_DETAIL,
    payload: null
  });
  axios
    .get(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_BLOG_DETAIL_URL}${blogId}`
    )
    .then(({ data }) => {
      dispatch({
        type: FETCH_BLOG_DETAIL_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_BLOG_DETAIL_FAILED,
        payload: error
      });
    });
};
