import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import {
  FETCH_HOME_CONTENT,
  FETCH_HOME_CONTENT_SUCCESS,
  FETCH_HOME_CONTENT_FAILED,
} from ".";

export const fetchHomeContent = () => (dispatch) => {
  loadProgressBar();
  dispatch({
    type: FETCH_HOME_CONTENT,
    payload: null,
  });
  axios
    .get(process.env.REACT_APP_API_URL)
    .then(({ data }) => {
      dispatch({
        type: FETCH_HOME_CONTENT_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_HOME_CONTENT_FAILED,
        payload: error,
      });
    });
};
