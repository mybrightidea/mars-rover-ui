import { createStore, combineReducers } from "redux";
import parametersReducer from "../reducers/parameters.reducer";
import configReducer from "../reducers/config.reducer";

export default () => {
  const store = createStore(
    combineReducers({
      parameters: parametersReducer,
      config: configReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
