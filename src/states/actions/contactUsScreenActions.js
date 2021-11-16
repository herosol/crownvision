import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOAST_SETTINGS } from "../../utils/SiteSettings";

import {
  FETCH_CONTACTUS_CONTENT,
  FETCH_CONTACTUS_CONTENT_SUCCESS,
  FETCH_CONTACTUS_CONTENT_FAILED,
  SAVE_CONTACT_MESSAGE,
  SAVE_CONTACT_MESSAGE_SUCCESS,
  SAVE_CONTACT_MESSAGE_FAILED
} from ".";
import { doObjToFormData } from "../../utils/Helpers";

export const fetchPageContent = () => (dispatch) => {
  loadProgressBar();
  dispatch({
    type: FETCH_CONTACTUS_CONTENT,
    payload: null
  });
  axios
    .get(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_CONTACTUS_CONTENT_URL}`
    )
    .then(({ data }) => {
      dispatch({
        type: FETCH_CONTACTUS_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CONTACTUS_CONTENT_FAILED,
        payload: error
      });
    });
};

export const saveContactMessage = (messageData) => (dispatch) => {
  loadProgressBar();
  dispatch({
    type: SAVE_CONTACT_MESSAGE,
    payload: null
  });
  axios
    .post(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_CONTACTUS_CONTENT_URL}`,
      doObjToFormData(messageData)
    )
    .then(({ data }) => {
      if (data.formValidationsError) toast.error(data.msg, TOAST_SETTINGS);
      else {
        toast.success(
          "Message have been sent successfully. we will contact in soon on your email",
          TOAST_SETTINGS
        );
        dispatch({
          type: SAVE_CONTACT_MESSAGE_SUCCESS,
          payload: data
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: SAVE_CONTACT_MESSAGE_FAILED,
        payload: error
      });
    });
};
