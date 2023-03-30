import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import "./index.css";
import thunk from "redux-thunk";

const initialState = [];

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "load":
      return action.payload;

    default:
      return state;
  }
};

const store = createStore(reduce, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
