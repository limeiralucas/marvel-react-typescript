import { createStore, Store } from "redux";

import { CharactersState } from "./ducks/characters/types";
import createRootReducer from "./ducks/rootReducer";
import { SeriesState } from "./ducks/series/types";

export interface ApplicationState {
  characters: CharactersState;
  series: SeriesState;
}

const store: Store<ApplicationState> = createStore(createRootReducer());

export default store;
