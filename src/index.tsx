import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "src/components/App";
import configureStore from "src/configureStore";
import initialState from "src/store";

// @ts-ignore
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const store = configureStore(initialState);

renderMethod(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById("root"),
);
