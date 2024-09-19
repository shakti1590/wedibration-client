import {
    HONEYMOON_DETAILS_REQUEST,
    HONEYMOON_DETAILS_SUCCESS,
    HONEYMOON_DETAILS_FAIL,
    SINGLE_HONEYMOON_REQUEST,
    SINGLE_HONEYMOON_SUCCESS,
    SINGLE_HONEYMOON_FAIL,
    ADD_HONEYMOON_REQUEST,
    ADD_HONEYMOON_SUCCESS,
    ADD_HONEYMOON_FAIL,
    ADD_HONEYMOON_RESET,
    UPDATE_HONEYMOON_REQUEST,
    UPDATE_HONEYMOON_SUCCESS,
    UPDATE_HONEYMOON_FAIL,
    UPDATE_HONEYMOON_RESET,
    DELETE_HONEYMOON_REQUEST,
    DELETE_HONEYMOON_SUCCESS,
    DELETE_HONEYMOON_FAIL,
    DELETE_HONEYMOON_RESET,
    CLEAR_ERRORS,
  } from "../constants/honeyMoonConstants";

  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const BASE_API = import.meta.env.VITE_BASE_API;
  import axios from "axios";
  
  // Get single Details
  export const singleHoneymoonDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_HONEYMOON_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/honeymoon/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: SINGLE_HONEYMOON_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: SINGLE_HONEYMOON_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get Event Details
  export const getHoneymoonsDetails = () => async (dispatch) => {
    try {
      dispatch({ type: HONEYMOON_DETAILS_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/honeymoon/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: HONEYMOON_DETAILS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: HONEYMOON_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Add Event
  export const honeymoonAdd = (formData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_HONEYMOON_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.post(
        `${BASE_API}/api/honeymoon`,
        formData,
        config
      );
      dispatch({ type: ADD_HONEYMOON_SUCCESS, payload: data });
    } catch (error) {
      toast.error("Something went wrong, Try Again");
      dispatch({
        type: ADD_HONEYMOON_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Event
  export const honeymoonUpdate = (honeymoonId, updatedFormData) => async (dispatch) => {
    try {
      
      dispatch({ type: UPDATE_HONEYMOON_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.put(
        `${BASE_API}/api/honeymoon/${honeymoonId}`,
        updatedFormData,
        config
      );
      dispatch({ type: UPDATE_HONEYMOON_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_HONEYMOON_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Event
  export const deleteHoneymoon = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_HONEYMOON_REQUEST });
  
      const token = localStorage.getItem("accessToken");
  
      const { data } = await axios.delete(`${BASE_API}/api/honeymoon/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch({ type: DELETE_HONEYMOON_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_HONEYMOON_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  