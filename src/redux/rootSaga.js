import { all, call } from "redux-saga/effects";
import { eventDetailsSagas } from "../components/events/eventDetails/saga";

export default function* rootSaga() {
  yield all([call(eventDetailsSagas)]);
}
