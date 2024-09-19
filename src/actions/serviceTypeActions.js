import {
    SERVICETYPE_DETAILS_REQUEST,
    SERVICETYPE_DETAILS_SUCCESS,
    SERVICETYPE_DETAILS_FAIL,
    ADD_SERVICETYPE_REQUEST,
    ADD_SERVICETYPE_SUCCESS,
    ADD_SERVICETYPE_FAIL,
    ADD_SERVICETYPE_RESET,
    UPDATE_SERVICETYPE_REQUEST,
    UPDATE_SERVICETYPE_SUCCESS,
    UPDATE_SERVICETYPE_FAIL,
    UPDATE_SERVICETYPE_RESET,
    DELETE_SERVICETYPE_REQUEST,
    DELETE_SERVICETYPE_SUCCESS,
    DELETE_SERVICETYPE_FAIL,
    DELETE_SERVICETYPE_RESET,
    CLEAR_ERRORS,
  } from "../constants/serviceTypeConstants";
  
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const BASE_API = import.meta.env.VITE_BASE_API;
  import axios from "axios";
  
  //Get Agent Details
  export const getServiceTypeDetails = () => async (dispatch) => {
    try {
      dispatch({ type: SERVICETYPE_DETAILS_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.get(`${BASE_API}/api/service-type-categories/`, {
        headers: {
          Authorization: `${token}`,
        },
      });
  
      dispatch({ type: SERVICETYPE_DETAILS_SUCCESS, payload: data.serviceTypeCategories });
    } catch (error) {
      dispatch({
        type: SERVICETYPE_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  //create car
  export const serviceTypeAdd = (name, serviceId) => async (dispatch) => {
    try {
      dispatch({ type: ADD_SERVICETYPE_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.post(
        `${BASE_API}/api/service-type-categories/`,
        { name, serviceId },
        config
      );
  
      dispatch({ type: ADD_SERVICETYPE_SUCCESS, payload: data });
    } catch (error) {
      toast.error("Something went wrong, Try Again");
      dispatch({
        type: ADD_SERVICETYPE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  //Update car
  export const serviceTypeUpdate = (serviceTypeId, name, serviceId) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SERVICETYPE_REQUEST });
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const { data } = await axios.patch(
        `${BASE_API}/api/service-type-categories/${serviceTypeId}`,
        { name, serviceId },
        config
      );
      dispatch({ type: UPDATE_SERVICETYPE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: UPDATE_SERVICETYPE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  //Delete car
  export const deleteServiceType = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_SERVICETYPE_REQUEST });
      const token = localStorage.getItem("accessToken");
      const { data } = await axios.delete(`${BASE_API}/api/service-type-categories/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      dispatch({ type: DELETE_SERVICETYPE_SUCCESS, payload: data.success });
    } catch (error) {
      dispatch({
        type: DELETE_SERVICETYPE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  //clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  