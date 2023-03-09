import ActionTypes from "./action.types";

export const fetchEventsListStart = () => ({
  type: ActionTypes.FETCH_EVENTS_START,
});

export const fetchEventsListSuccess = eventsList => ({
  type: ActionTypes.FETCH_EVENTS_SUCCESS,
  payload: eventsList,
});

export const fetchEventsListFailure = error => ({
  type: ActionTypes.FETCH_EVENTS_FAILURE,
  payload: error,
});
