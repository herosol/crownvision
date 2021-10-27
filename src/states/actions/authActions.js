import axios from "axios";

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  LOGOUT,
  OFFLINE_ERROR,
} from ".";

export const login = (loginData) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: null,
  });
  axios
    .post(process.env.REACT_APP_API_URL + process.env.REACT_APP_LOGIN_URL, {
      loginData,
    })
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: error,
      });
    });
};

export const register = (registerData) => (dispatch) => {
  dispatch({
    type: REGISTER,
    payload: null,
  });
  if (navigator.onLine) {
    axios
      .post(
        process.env.REACT_APP_API_URL + process.env.REACT_APP_REGISTER_URL,
        {
          registerData,
        }
      )
      .then((response) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_FAILED,
          payload: error,
        });
      });
  } else {
    dispatch({
      type: OFFLINE_ERROR,
      payload: null,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
};
