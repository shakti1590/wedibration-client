import {
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    ADD_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    CLEAR_ERRORS,
  } from "../constants/productConstants";

  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const BASE_API = import.meta.env.VITE_BASE_API;
  import axios from "axios";
  
  // Get single Details
  export const singleProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SINGLE_PRODUCT_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/product/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: SINGLE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Get Event Details
  export const getProductsDetails = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/product/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Add Event
  export const productAdd = (formData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_PRODUCT_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.post(
        `${BASE_API}/api/product`,
        formData,
        config
      );
      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      toast.error("Something went wrong, Try Again");
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Event
  export const productUpdate = (productId, updatedFormData) => async (dispatch) => {
    try {
      
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.put(
        `${BASE_API}/api/product/${productId}`,
        updatedFormData,
        config
      );
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Delete Event
  export const deleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });
  
      const token = localStorage.getItem("accessToken");
  
      const { data } = await axios.delete(`${BASE_API}/api/product/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  