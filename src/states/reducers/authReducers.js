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
} from "../actions";

const initialState = {
  loading: false,
  processing: false,
  error: null,
  token: null,
  offline: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        processing: true,
        loading: false,
        error: false,
        offline: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
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
