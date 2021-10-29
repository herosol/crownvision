import {
  FETCH_LOCATIONS_CONTENT,
  FETCH_LOCATIONS_CONTENT_SUCCESS,
  FETCH_LOCATIONS_CONTENT_FAILED,
} from "../actions";

const initialState = {
  skeleton: true,
  error: false,
  content: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCATIONS_CONTENT:
      return {
        ...state,
        skeleton: true,
      };
    case FETCH_LOCATIONS_CONTENT_SUCCESS:
      return {
        ...state,
        skeleton: false,
        content: action.payload,
      };
    case FETCH_LOCATIONS_CONTENT_FAILED:
      return {
        ...state,
        skeleton: false,
        error: true,
      };
    default:
      return state;
  }
}
