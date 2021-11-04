import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FORM_VALIDATIONS_ERROR,
  LOGOUT,
  OFFLINE_ERROR,
  CLEAR_UNEXPECTED,
} from ".";
import { doObjToFormData } from "../../utils/Helpers";

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
  loadProgressBar();
  dispatch({
    type: REGISTER,
    payload: null,
  });
  if (navigator.onLine) {
    axios
      .post(
        process.env.REACT_APP_API_URL + process.env.REACT_APP_REGISTER_URL,
        doObjToFormData(registerData)
      )
      .then(({ data }) => {
        if (data.formValidationsError) {
          dispatch({
            type: FORM_VALIDATIONS_ERROR,
            payload: data.msg,
          });
        } else {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
          });
        }
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

export const clearUnexpected = () => (dispatch) => {
  dispatch({
    type: CLEAR_UNEXPECTED,
    payload: null,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
};
