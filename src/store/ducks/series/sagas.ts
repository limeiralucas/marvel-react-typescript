import { call, put, takeLatest } from "redux-saga/effects";

import apiService from "../../../services/api";
import { SeriesTypes } from "./types";
import { getAllByCharacterSuccess, getAllByCharacterFailure } from "./actions";

function* getAllByCharacter(action: any) {
  try {
    const response = yield call(
      apiService.get,
      `/characters/${action.payload.characterId}/series`
    );
    const responseData = response.data;
    yield put(getAllByCharacterSuccess(responseData.data.results));
  } catch (err) {
    yield put(getAllByCharacterFailure());
  }
}

export function* seriesSaga() {
  yield takeLatest(SeriesTypes.GET_ALL_BY_CHARACTER_REQUEST, getAllByCharacter);
}
