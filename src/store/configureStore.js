import { createStore, combineReducers } from "redux";
import parametersReducer from "../reducers/parameters.reducer";
import gridReducer from "../reducers/grid.reducer";

export default () => {
  const store = createStore(
    combineReducers({
      parameters: parametersReducer,
      grid: gridReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
