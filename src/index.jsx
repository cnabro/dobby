import React from "react";
import ReactDOM from "react-dom";
import "src/index.css";
import App from "src/components/App";

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(<App />, document.getElementById("root"));
