import {
    LOVESTORY_DETAILS_REQUEST,
    LOVESTORY_DETAILS_SUCCESS,
    LOVESTORY_DETAILS_FAIL,

    APPROVED_LOVESTORY_REQUEST,
    APPROVED_LOVESTORY_SUCCESS,
    APPROVED_LOVESTORY_FAIL,

    ADD_LOVESTORY_REQUEST,
    ADD_LOVESTORY_SUCCESS,
    ADD_LOVESTORY_FAIL,
    ADD_LOVESTORY_RESET,

    DELETE_LOVESTORY_REQUEST,
    DELETE_LOVESTORY_SUCCESS,
    DELETE_LOVESTORY_FAIL,
    DELETE_LOVESTORY_RESET,
    CLEAR_ERRORS,
  } from "../constants/loveStoryConstants";

  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const BASE_API = import.meta.env.VITE_BASE_API;
  import axios from "axios";
  

  // Get Event Details
  export const getLoveStory = () => async (dispatch) => {
    try {
      dispatch({ type: LOVESTORY_DETAILS_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/loveStory/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: LOVESTORY_DETAILS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: LOVESTORY_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  // Get Details
  export const approvedLoveStoryDetails = () => async (dispatch) => {
    try {
      dispatch({ type: APPROVED_LOVESTORY_REQUEST });
      const { data } = await axios.get(`${BASE_API}/api/loveStory/approved-loveStories`);
  
      dispatch({ type: APPROVED_LOVESTORY_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: APPROVED_LOVESTORY_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Add Event
  export const loveStoryAdd = (formData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_LOVESTORY_REQUEST });
      
      const { data } = await axios.post(
        `${BASE_API}/api/loveStory`,
        formData,
      );
      dispatch({ type: ADD_LOVESTORY_SUCCESS, payload: data });
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch({
        type: ADD_LOVESTORY_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  // Delete Event
  export const deleteLoveStory = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_LOVESTORY_REQUEST });
  
      const token = localStorage.getItem("accessToken");
  
      const { data } = await axios.delete(`${BASE_API}/api/loveStory/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch({ type: DELETE_LOVESTORY_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_LOVESTORY_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  