import {
    EVENT_DETAILS_REQUEST,
    EVENT_DETAILS_SUCCESS,
    EVENT_DETAILS_FAIL,
    ADD_EVENT_REQUEST,
    ADD_EVENT_SUCCESS,
    ADD_EVENT_FAIL,
    ADD_EVENT_RESET,
    UPDATE_EVENT_REQUEST,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAIL,
    UPDATE_EVENT_RESET,
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,
    DELETE_EVENT_RESET,
    CLEAR_ERRORS,
  } from "../constants/eventConstants";
  
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const BASE_API = import.meta.env.VITE_BASE_API;
  import axios from "axios";
  
  // Get Event Details
  export const getEventsDetails = () => async (dispatch) => {
    try {
      dispatch({ type: EVENT_DETAILS_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/events/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: EVENT_DETAILS_SUCCESS, payload: data.events });
    } catch (error) {
      dispatch({
        type: EVENT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Add Event
  export const eventAdd = (formData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_EVENT_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.post(
        `${BASE_API}/api/events`,
        formData,
        config
      );
      dispatch({ type: ADD_EVENT_SUCCESS, payload: data });
    } catch (error) {
      toast.error("Something went wrong, Try Again");
      dispatch({
        type: ADD_EVENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Event
  export const eventUpdate = (eventId, formData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_EVENT_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.patch(
        `${BASE_API}/api/events/${eventId}`,
        formData,
        config
      );
      dispatch({ type: UPDATE_EVENT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_EVENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Event
  export const deleteEvent = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_EVENT_REQUEST });
  
      const token = localStorage.getItem("accessToken");
  
      const { data } = await axios.delete(`${BASE_API}/api/events/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_EVENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  