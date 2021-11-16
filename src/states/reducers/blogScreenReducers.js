import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILED,
  FETCH_BLOG_DETAIL,
  FETCH_BLOG_DETAIL_SUCCESS,
  FETCH_BLOG_DETAIL_FAILED,
  OFFLINE_ERROR,
  CLEAR_UNEXPECTED
} from "../actions";

const initialState = {
  skeleton: true,
  error: false,
  content: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS:
    case FETCH_BLOG_DETAIL:
      return {
        ...state,
        skeleton: true
      };
    case FETCH_BLOGS_SUCCESS:
    case FETCH_BLOG_DETAIL_SUCCESS:
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
