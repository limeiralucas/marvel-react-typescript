import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Button from "./components/button/button";

ReactDOM.render(
  <React.StrictMode>
    <Button value="teste" />
  </React.StrictMode>,
  document.getElementById("root")
);
