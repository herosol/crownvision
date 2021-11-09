import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILED,
  OFFLINE_ERROR,
  CLEAR_UNEXPECTED,
} from ".";

export const fetchBlogs = () => (dispatch) => {
  dispatch({
    type: FETCH_BLOGS,
    payload: null,
  });
  axios
    .get(process.env.REACT_APP_API_URL + process.env.REACT_APP_BLOGS_URL)
    .then(({ data }) => {
      dispatch({
        type: FETCH_BLOGS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_BLOGS_FAILED,
        payload: error,
      });
    });
};
