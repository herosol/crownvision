import { BOOK_SLOT, BOOK_SLOT_SUCCESS, BOOK_SLOT_FAILED } from "../actions";

const initialState = {
  loading: false,
  error: null,
  token: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case BOOK_SLOT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOK_SLOT_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case BOOK_SLOT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
