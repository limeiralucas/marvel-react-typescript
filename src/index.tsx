import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import Card from "./components/card/card";
import CharacterListScreen from "./screens/characterList";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <CharacterListScreen />
  </Provider>,
  document.getElementById("root")
);
