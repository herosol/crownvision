import {
  FETCH_HOME_CONTENT,
  FETCH_HOME_CONTENT_SUCCESS,
  FETCH_HOME_CONTENT_FAILED,
} from "../actions";

const initialState = {
  skeleton: false,
  error: false,
  content: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME_CONTENT:
      return {
        ...state,
        skeleton: true,
      };
    case FETCH_HOME_CONTENT_SUCCESS:
      return {
        ...state,
        skeleton: false,
        content: action.payload,
      };
    case FETCH_HOME_CONTENT_FAILED:
      return {
        ...state,
        skeleton: false,
        error: true,
      };
    default:
      return state;
  }
}
