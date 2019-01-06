import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "src/components/App";
import configureStore from "src/configureStore";
import initialState from "src/store";
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const store = configureStore(initialState);

renderMethod(
  <Provider store={store}>
    <Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Fragment>
  </Provider>,
  document.getElementById("root"),
);
