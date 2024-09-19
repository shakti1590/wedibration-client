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
  
  export const singleBlogsReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case SINGLE_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SINGLE_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case SINGLE_BLOG_FAIL:
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
  
  export const allBlogsReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case BLOG_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case BLOG_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case BLOG_DETAILS_FAIL:
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
  
  export const blogAddReducer = (state = { name: {} }, action) => {
    switch (action.type) {
      case ADD_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_BLOG_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          name: action.payload,
        };
      case ADD_BLOG_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case ADD_BLOG_RESET:
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
  
  export const blogUpdateAndDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BLOG_REQUEST:
      case UPDATE_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case UPDATE_BLOG_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_BLOG_FAIL:
      case UPDATE_BLOG_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_BLOG_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_BLOG_RESET:
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
  