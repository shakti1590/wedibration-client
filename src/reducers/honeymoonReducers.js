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
  
  export const singleHoneymoonReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case SINGLE_HONEYMOON_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SINGLE_HONEYMOON_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case SINGLE_HONEYMOON_FAIL:
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
  
  export const allHoneymoonsReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case HONEYMOON_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case HONEYMOON_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case HONEYMOON_DETAILS_FAIL:
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
  
  export const honeymoonAddReducer = (state = { name: {} }, action) => {
    switch (action.type) {
      case ADD_HONEYMOON_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_HONEYMOON_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          name: action.payload,
        };
      case ADD_HONEYMOON_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case ADD_HONEYMOON_RESET:
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
  
  export const honeymoonUpdateAndDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_HONEYMOON_REQUEST:
      case UPDATE_HONEYMOON_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_HONEYMOON_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case UPDATE_HONEYMOON_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_HONEYMOON_FAIL:
      case UPDATE_HONEYMOON_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_HONEYMOON_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_HONEYMOON_RESET:
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
  