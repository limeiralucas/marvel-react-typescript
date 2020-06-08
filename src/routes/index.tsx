import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import CharacterViewScreen from "../screens/characterView";
import CharacterListScreen from "../screens/characterList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CharacterListScreen} />
        <Route path="/list" exact component={CharacterListScreen} />
        <Route
          path="/character/:characterId"
          exact
          component={CharacterViewScreen}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
