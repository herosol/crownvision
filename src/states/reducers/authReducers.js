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
} from "../actions";

const initialState = {
  token: null,
  processing: false,
  formValidationsError: false,
  formSuccess: false,
  emailExist: false,
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
        formValidationsError: false,
        formSuccess: false,
      };
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        processing: true,
        error: false,
        offline: false,
        formValidationsError: false,
        formSuccess: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        formSuccess: true,
        processing: false,
      };
    case FORM_VALIDATIONS_ERROR:
      return {
        ...state,
        formValidationsError: action.payload,
        processing: false,
      };
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      return {
        ...state,
        error: true,
        formValidationsError: false,
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
