import {
  CITY_DETAILS_REQUEST,
  CITY_DETAILS_SUCCESS,
  CITY_DETAILS_FAIL,
  ADD_CITY_REQUEST,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAIL,
  ADD_CITY_RESET,
  UPDATE_CITY_REQUEST,
  UPDATE_CITY_SUCCESS,
  UPDATE_CITY_FAIL,
  UPDATE_CITY_RESET,
  DELETE_CITY_RESET,
  DELETE_CITY_REQUEST,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAIL,
  CLEAR_ERRORS,
} from "../constants/cityConstants";

export const allCitiesReducer = (state = { cities: [], totalCount: 0 }, action) => {
  switch (action.type) {
    case CITY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CITY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload,
        totalCount: action.payload.length, // Add this line
      };
    case CITY_DETAILS_FAIL:
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

export const cityAddReducer = (state = { name: {} }, action) => {
  switch (action.type) {
    case ADD_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CITY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        name: action.payload,
      };
    case ADD_CITY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_CITY_RESET:
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


export const cityUpdateAndDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CITY_REQUEST:
    case UPDATE_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CITY_FAIL:
    case UPDATE_CITY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case DELETE_CITY_RESET:
      return {
        ...state,
        isDeleted:false,
      };
    case UPDATE_CITY_RESET:
      return {
        ...state,
        isUpdated:false,
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
