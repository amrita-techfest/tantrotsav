import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import eventDetailsReducer from "../components/events/eventDetails/reducers";
import eventReducer from "../components/events/index/reducers";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["formReducer"],
};

const rootReducer = combineReducers({
  eventDetails: eventDetailsReducer,
  eventSetter: eventReducer,
});

export default persistReducer(persistConfig, rootReducer);
