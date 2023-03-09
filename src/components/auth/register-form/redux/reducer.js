import ActionTypes from "./action.types";

const INITIAL_STATE = {
  eventsList: [],
  isFetching: false,
  error: undefined,
};

const eventsListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        eventsList: action.payload,
      };
    case ActionTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventsListReducer;
