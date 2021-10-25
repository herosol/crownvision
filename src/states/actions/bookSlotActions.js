import axios from "axios";
import { BOOK_SLOT, BOOK_SLOT_SUCCESS, BOOK_SLOT_FAILED } from ".";

export const bookSlot = (bookingData) => (dispatch) => {
  dispatch({
    type: BOOK_SLOT,
    payload: null,
  });
  axios
    .post(process.env.REACT_APP_API_URL + process.env.REACT_APP_BOOK_SLOT_URL, {
      bookingData,
    })
    .then((response) => {
      dispatch({
        type: BOOK_SLOT_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: BOOK_SLOT_FAILED,
        payload: error,
      });
    });
};
