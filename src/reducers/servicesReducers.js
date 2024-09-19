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

export const allServiceReducer = (state = { services: [], totalServices: 0 }, action) => {
  switch (action.type) {
    case SERVICE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SERVICE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
        totalServices: action.payload.length
      };
    case SERVICE_DETAILS_FAIL:
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

export const serviceAddReducer = (state = { name: {} }, action) => {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_SERVICE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        name: action.payload,
      };
    case ADD_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_SERVICE_RESET:
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

export const serviceUpdateAndDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SERVICE_REQUEST:
    case UPDATE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_SERVICE_FAIL:
    case UPDATE_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_SERVICE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_SERVICE_RESET:
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
