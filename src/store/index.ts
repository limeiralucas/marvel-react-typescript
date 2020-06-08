import { createStore, Store, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./ducks/rootSaga";

import { CharactersState } from "./ducks/characters/types";
import createRootReducer from "./ducks/rootReducer";
import { SeriesState } from "./ducks/series/types";

export interface ApplicationState {
  characters: CharactersState;
  series: SeriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  createRootReducer(),
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
