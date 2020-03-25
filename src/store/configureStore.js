import { createStore, combineReducers } from "redux";
import parametersReducer from "../reducers/parameters.reducer";
import plateauReducer from "../reducers/plateau.reducer";
import resultReducer from "../reducers/result.reducer";

export default () => {
  const store = createStore(
    combineReducers({
      parameters: parametersReducer,
      plateau: plateauReducer,
      result: resultReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
