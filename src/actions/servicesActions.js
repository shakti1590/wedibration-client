import {
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAIL,
  ADD_SERVICE_RESET,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAIL,
  UPDATE_SERVICE_RESET,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_RESET,
  CLEAR_ERRORS,
} from "../constants/servicesConstants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_API = import.meta.env.VITE_BASE_API;
import axios from "axios";

//Get Agent Details
export const getServiceDetails = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });
    const token = localStorage.getItem("accessToken");
    const { data } = await axios.get(`${BASE_API}/api/services/`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    dispatch({ type: SERVICE_DETAILS_SUCCESS, payload: data.services });
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//create car
export const serviceAdd = (name, file) => async (dispatch) => {
  try {
    dispatch({ type: ADD_SERVICE_REQUEST });
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    };
    const { data } = await axios.post(
      `${BASE_API}/api/services/create-service`,
      { name, file },
      config
    );

    dispatch({ type: ADD_SERVICE_SUCCESS, payload: data });
  } catch (error) {
    toast.error("Something went wrong, Try Again");
    dispatch({
      type: ADD_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Update car
export const serviceUpdate = (serviceId, name, file) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SERVICE_REQUEST });
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
    };
    const { data } = await axios.patch(
      `${BASE_API}/api/services/${serviceId}`,
      { name, file },
      config
    );
    dispatch({ type: UPDATE_SERVICE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Delete car
export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });

    const token = localStorage.getItem("accessToken");

    const { data } = await axios.delete(`${BASE_API}/api/services/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch({ type: DELETE_SERVICE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
