import {
  CITY_DETAILS_REQUEST,
  CITY_DETAILS_SUCCESS,
  CITY_DETAILS_FAIL,
  ADD_CITY_REQUEST,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAIL,
  UPDATE_CITY_REQUEST,
  UPDATE_CITY_SUCCESS,
  UPDATE_CITY_FAIL,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAIL,
  CLEAR_ERRORS,
} from "../constants/cityConstants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BASE_API = import.meta.env.VITE_BASE_API;
import axios from "axios";

//Get Agent Details
export const getCityDetails = () => async (dispatch) => {
  try {
    dispatch({ type: CITY_DETAILS_REQUEST });
    const token = localStorage.getItem("accessToken");
    const { data } = await axios.get(`${BASE_API}/api/cities`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: CITY_DETAILS_SUCCESS, payload: data.cities });
  } catch (error) {
    dispatch({
      type: CITY_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//create car
export const cityAdd = (name, serviceId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CITY_REQUEST });
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      `${BASE_API}/api/cities/`,
      { name, serviceId },
      config
    );
    dispatch({ type: ADD_CITY_SUCCESS, payload: data });
  } catch (error) {
    toast.error("Something went wrong, Try Again");
    dispatch({
      type: ADD_CITY_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Update city
export const cityUpdate = (id, dataToSend) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CITY_REQUEST });
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const newName = dataToSend.newName;
    const newSlug = dataToSend.newSlug;
    const serviceIds = dataToSend.serviceIds;
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    // console.log( dataToSend);
    const { data } = await axios.put(
      `${BASE_API}/api/cities/${id}`,
      { newName, newSlug, serviceIds },
      config
    );
    dispatch({ type: UPDATE_CITY_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_CITY_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Delete car
export const deleteCity = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CITY_REQUEST });

    const token = localStorage.getItem("accessToken");

    const { data } = await axios.delete(`${BASE_API}/api/cities/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: DELETE_CITY_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_CITY_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
