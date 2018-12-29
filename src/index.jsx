import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./configureStore";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const store = configureStore();

renderMethod(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById("root"),
);
