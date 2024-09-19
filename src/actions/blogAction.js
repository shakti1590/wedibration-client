import {
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
    SINGLE_BLOG_REQUEST,
    SINGLE_BLOG_SUCCESS,
    SINGLE_BLOG_FAIL,
    ADD_BLOG_REQUEST,
    ADD_BLOG_SUCCESS,
    ADD_BLOG_FAIL,
    ADD_BLOG_RESET,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    UPDATE_BLOG_RESET,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    DELETE_BLOG_RESET,
    CLEAR_ERRORS,
  } from "../constants/blogConstants";
  
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const BASE_API = import.meta.env.VITE_BASE_API;
  import axios from "axios";
  
  // Get single Details
  export const singleBlogsDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_BLOG_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/blog/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: SINGLE_BLOG_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: SINGLE_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get Event Details
  export const getBlogsDetails = () => async (dispatch) => {
    try {
      dispatch({ type: BLOG_DETAILS_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/blog/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: BLOG_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Add Event
  export const blogAdd = (formData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_BLOG_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.post(
        `${BASE_API}/api/blog`,
        formData,
        config
      );
      dispatch({ type: ADD_BLOG_SUCCESS, payload: data });
    } catch (error) {
      toast.error("Something went wrong, Try Again");
      dispatch({
        type: ADD_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Event
  export const blogUpdate = (blogId, updatedFormData) => async (dispatch) => {
    try {
      
      dispatch({ type: UPDATE_BLOG_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.put(
        `${BASE_API}/api/blog/${blogId}`,
        updatedFormData,
        config
      );
      dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Event
  export const deleteBlog = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_BLOG_REQUEST });
  
      const token = localStorage.getItem("accessToken");
  
      const { data } = await axios.delete(`${BASE_API}/api/blog/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch({ type: DELETE_BLOG_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_BLOG_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  