import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import {
  FETCH_LOCATIONS_CONTENT,
  FETCH_LOCATIONS_CONTENT_SUCCESS,
  FETCH_LOCATIONS_CONTENT_FAILED,
} from ".";

export const fetchLocationsContent = () => (dispatch) => {
  loadProgressBar();
  dispatch({
    type: FETCH_LOCATIONS_CONTENT,
    payload: null,
  });
  axios
    .get(
      process.env.REACT_APP_API_URL +
        process.env.REACT_APP_LOCATIONS_CONTENT_URL
    )
    .then(({ data }) => {
      dispatch({
        type: FETCH_LOCATIONS_CONTENT_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_LOCATIONS_CONTENT_FAILED,
        payload: error,
      });
    });
};
