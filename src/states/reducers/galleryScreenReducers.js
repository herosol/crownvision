import {
  FETCH_GALLERY_CONTENT,
  FETCH_GALLERY_CONTENT_SUCCESS,
  FETCH_GALLERY_CONTENT_FAILED
} from "../actions";

const initialState = {
  skeleton: true,
  error: false,
  content: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GALLERY_CONTENT:
      return {
        ...state,
        skeleton: true
      };
    case FETCH_GALLERY_CONTENT_SUCCESS:
      return {
        ...state,
        skeleton: false,
        content: action.payload
      };
    case FETCH_GALLERY_CONTENT_FAILED:
      return {
        ...state,
        skeleton: false,
        error: action.payload
      };
    default:
      return state;
  }
}
