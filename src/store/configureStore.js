import { createStore, combineReducers } from "redux";
import appReducer from "../reducers/auth.reducer";

export default () => {
  const store = createStore(
    combineReducers({ app: appReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
