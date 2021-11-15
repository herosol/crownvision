import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILED,
  OFFLINE_ERROR,
  CLEAR_UNEXPECTED
} from "../actions";
import * as AuthTokens from "../../utils/AuthTokens";

const initialState = {
  skeleton: true,
  error: false,
  content: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        skeleton: true
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        skeleton: false,
        content: action.payload
      };
    case FETCH_BLOGS_FAILED:
      return {
        ...state,
        skeleton: false,
        error: true
      };
    default:
      return state;
  }
}
