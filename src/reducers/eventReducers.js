import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  ADD_EVENT_RESET,
  UPDATE_EVENT_REQUEST,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
  UPDATE_EVENT_RESET,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  DELETE_EVENT_RESET,
  CLEAR_ERRORS,
} from "../constants/eventConstants";

export const allEventsReducer = (
  state = { events: [], totalEvents: 0 },
  action
) => {
  switch (action.type) {
    case EVENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        totalEvents: action.payload.length,
      };
    case EVENT_DETAILS_FAIL:
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

export const eventAddReducer = (state = { name: {} }, action) => {
  switch (action.type) {
    case ADD_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_EVENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        name: action.payload,
      };
    case ADD_EVENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_EVENT_RESET:
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

export const eventUpdateAndDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EVENT_REQUEST:
    case UPDATE_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_EVENT_FAIL:
    case UPDATE_EVENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_EVENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_EVENT_RESET:
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
