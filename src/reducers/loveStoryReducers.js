import {
    LOVESTORY_DETAILS_REQUEST,
    LOVESTORY_DETAILS_SUCCESS,
    LOVESTORY_DETAILS_FAIL,

    APPROVED_LOVESTORY_REQUEST,
    APPROVED_LOVESTORY_SUCCESS,
    APPROVED_LOVESTORY_FAIL,

    ADD_LOVESTORY_REQUEST,
    ADD_LOVESTORY_SUCCESS,
    ADD_LOVESTORY_FAIL,
    ADD_LOVESTORY_RESET,

    DELETE_LOVESTORY_REQUEST,
    DELETE_LOVESTORY_SUCCESS,
    DELETE_LOVESTORY_FAIL,
    DELETE_LOVESTORY_RESET,
    CLEAR_ERRORS,
  } from "../constants/loveStoryConstants";
  
  export const approvedLoveStoryReducer = (state = { data: {} }, action) => {
    switch (action.type) {
      case APPROVED_LOVESTORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case APPROVED_LOVESTORY_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case APPROVED_LOVESTORY_FAIL:
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
  
  export const allloveStoryReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case LOVESTORY_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case LOVESTORY_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case LOVESTORY_DETAILS_FAIL:
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
  
  export const loveStoryAddReducer = (state = { name: {} }, action) => {
    switch (action.type) {
      case ADD_LOVESTORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_LOVESTORY_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          name: action.payload,
        };
      case ADD_LOVESTORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case ADD_LOVESTORY_RESET:
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
  
  export const loveStoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_LOVESTORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_LOVESTORY_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETE_LOVESTORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_LOVESTORY_RESET:
        return {
          ...state,
          isDeleted: false,
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
  