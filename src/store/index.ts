import { createStore, Store } from "redux";

import { CharactersState } from "./ducks/characters/types";
import createRootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  characters: CharactersState;
}

const store: Store<ApplicationState> = createStore(createRootReducer());

export default store;
