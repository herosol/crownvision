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
  CLEAR_UNEXPECTED,
} from "../actions";

const initialState = {
  token: null,
  processing: false,
  formError: false,
  formSuccess: false,
  error: false,
  offline: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_UNEXPECTED:
      return {
        ...state,
        error: false,
        offline: false,
        processing: false,
        formError: false,
        formSuccess: false,
      };
    case LOGIN:
    case REGISTER:
    case FORGOT_PASSWORD:
      return {
        ...state,
        processing: true,
        error: false,
        offline: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        formSuccess: true,
        processing: false,
      };
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      return {
        ...state,
        error: true,
        formError: false,
        processing: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
      };
    case OFFLINE_ERROR:
      return {
        ...state,
        error: false,
        offline: true,
        processing: false,
      };
    default:
      return state;
  }
}
