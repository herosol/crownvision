import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import {
  FETCH_GALLERY_CONTENT,
  FETCH_GALLERY_CONTENT_SUCCESS,
  FETCH_GALLERY_CONTENT_FAILED
} from ".";

export const fetchPageContent = () => (dispatch) => {
  loadProgressBar();
  dispatch({
    type: FETCH_GALLERY_CONTENT,
    payload: null
  });
  axios
    .get(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_GALLERY_CONTENT_URL}`
    )
    .then(({ data }) => {
      dispatch({
        type: FETCH_GALLERY_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_GALLERY_CONTENT_FAILED,
        payload: error
      });
    });
};
