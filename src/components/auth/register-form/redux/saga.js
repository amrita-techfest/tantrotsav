import { takeLatest, call, put, all } from "redux-saga/effects";
import ActionTypes from "./action.types";
import { fetchEventsListSuccess, fetchEventsListFailure } from "./actions";
import getEventList from "../../../../services/getEventList";

function* fetchEventList() {
  try {
    const eventsList = yield call(getEventList);
    yield put(fetchEventsListSuccess(eventsList));
  } catch (error) {
    yield put(fetchEventsListFailure(error));
  }
}

export function* getEventsListSaga() {
  yield takeLatest(ActionTypes.FETCH_EVENTS_START, fetchEventList);
}

export function* eventsListSagas() {
  yield all([call(getEventsListSaga)]);
}
