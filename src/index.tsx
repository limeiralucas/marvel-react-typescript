import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import Card from "./components/card/card";
import CharacterListScreen from "./screens/characterList";
import store from "./store";
import CharacterScreen from "./screens/character";

ReactDOM.render(
  <Provider store={store}>
    <CharacterScreen />
  </Provider>,
  document.getElementById("root")
);
