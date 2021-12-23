import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import rootReducer from "./store/reducers/index";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
