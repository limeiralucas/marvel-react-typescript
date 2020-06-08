import { fork } from "redux-saga/effects";

import { characterSaga } from "../ducks/characters/sagas";
import { seriesSaga } from "./series/sagas";

export default function* rootSaga() {
  yield fork(characterSaga);
  yield fork(seriesSaga);
}
