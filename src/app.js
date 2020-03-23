import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

import configureStore from "./store/configureStore";
import App from "./components/routing/App";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
