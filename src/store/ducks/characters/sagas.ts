import { call, put, takeLatest } from "redux-saga/effects";

import apiService from "../../../services/api";
import { CharactersTypes } from "./types";
import {
  getAllSuccess,
  getAllFailure,
  searchFailure,
  searchSuccess,
} from "./actions";

function* getAll() {
  try {
    const response = yield call(apiService.get, "/characters");
    const responseData = response.data;
    console.log(responseData);
    yield put(getAllSuccess(responseData.data.results));
  } catch (err) {
    yield put(getAllFailure());
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
}
