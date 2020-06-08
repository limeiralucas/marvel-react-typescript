import { fork } from "redux-saga/effects";

import { characterSaga } from "../ducks/characters/sagas";

export default function* rootSaga() {
  yield fork(characterSaga);
}
