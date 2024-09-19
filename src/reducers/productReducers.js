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
  
  export const singleProductReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case SINGLE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SINGLE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case SINGLE_PRODUCT_FAIL:
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
  
  export const allProductsReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case PRODUCT_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case PRODUCT_DETAILS_FAIL:
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
  
  export const productAddReducer = (state = { name: {} }, action) => {
    switch (action.type) {
      case ADD_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          name: action.payload,
        };
      case ADD_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case ADD_PRODUCT_RESET:
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
  
  export const productUpdateAndDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
      case UPDATE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_PRODUCT_FAIL:
      case UPDATE_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_PRODUCT_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_PRODUCT_RESET:
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
  