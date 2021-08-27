import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/post";
import { Provider } from "react-redux";
// redux toolkit benifits
// we provide us devtool (no need to import seperately)
// async function (no need to install thunk)

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

