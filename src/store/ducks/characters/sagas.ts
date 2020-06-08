import { call, put, takeLatest } from "redux-saga/effects";

import apiService from "../../../services/api";
import { CharactersTypes } from "./types";
import {
  getAllSuccess,
  getAllFailure,
  searchFailure,
  searchSuccess,
  getSuccess,
  getFailure,
} from "./actions";

function* getAll() {
  try {
    const response = yield call(apiService.get, "/characters");
    const responseData = response.data;
    yield put(getAllSuccess(responseData.data.results));
  } catch (err) {
    yield put(getAllFailure());
  }
}

function* get(action: any) {
  try {
    const response = yield call(
      apiService.get,
      `/characters/${action.payload.characterId}`
    );
    const responseData = response.data;
    yield put(getSuccess(responseData.data.results[0]));
  } catch (err) {
    yield put(getFailure());
  }
}

function* search(action: any) {
  try {
    const response = yield call(apiService.get, "/characters", {
      params: {
        nameStartsWith: action.payload.query,
      },
    });
    const responseData = response.data;
    yield put(searchSuccess(responseData.data.results));
  } catch (err) {
    yield put(searchFailure());
  }
}

export function* characterSaga() {
  yield takeLatest(CharactersTypes.GET_ALL_REQUEST, getAll);
  yield takeLatest(CharactersTypes.SEARCH_REQUEST, search);
  yield takeLatest(CharactersTypes.GET_REQUEST, get);
}
