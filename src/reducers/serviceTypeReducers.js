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
  
  export const allServiceTypeReducer = (state = { serviceTypeCategories: [] }, action) => {
    switch (action.type) {
      case SERVICETYPE_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SERVICETYPE_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          serviceTypeCategories: action.payload,
        };
      case SERVICETYPE_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const serviceTypeAddReducer = (state = { name: {} }, action) => {
    switch (action.type) {
      case ADD_SERVICETYPE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_SERVICETYPE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          name: action.payload,
        };
      case ADD_SERVICETYPE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case ADD_SERVICETYPE_RESET:
        return {
          ...state,
          success: false,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const serviceTypeUpdateAndDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_SERVICETYPE_REQUEST:
      case UPDATE_SERVICETYPE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_SERVICETYPE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case UPDATE_SERVICETYPE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_SERVICETYPE_FAIL:
      case UPDATE_SERVICETYPE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_SERVICETYPE_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_SERVICETYPE_RESET:
        return {
          ...state,
          isUpdated: false,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  