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
} from "../actions";

const initialState = {
  loading: false,
  error: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
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
        error: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
