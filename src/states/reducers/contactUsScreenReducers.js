import {
  FETCH_CONTACTUS_CONTENT,
  FETCH_CONTACTUS_CONTENT_SUCCESS,
  FETCH_CONTACTUS_CONTENT_FAILED,
  SAVE_CONTACT_MESSAGE,
  SAVE_CONTACT_MESSAGE_SUCCESS,
  SAVE_CONTACT_MESSAGE_FAILED,
  RESET_FORM_STATES
} from "../actions";

const initialState = {
  skeleton: true,
  error: false,
  processing: false,
  formSuccess: false,
  content: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTUS_CONTENT:
      return {
        ...state,
        skeleton: true
      };
    case FETCH_CONTACTUS_CONTENT_SUCCESS:
      return {
        ...state,
        skeleton: false,
        content: action.payload
      };
    case FETCH_CONTACTUS_CONTENT_FAILED:
      return {
        ...state,
        skeleton: false,
        error: action.payload
      };
    case SAVE_CONTACT_MESSAGE:
      return {
        ...state,
        processing: true,
        formSuccess: false
      };
    case SAVE_CONTACT_MESSAGE_SUCCESS:
      return {
        ...state,
        processing: false
      };
    case SAVE_CONTACT_MESSAGE_FAILED:
      return {
        ...state,
        processing: false
      };
    case RESET_FORM_STATES:
      return {
        ...state,
        error: false,
        processing: false,
        formSuccess: false
      };
    default:
      return state;
  }
}
