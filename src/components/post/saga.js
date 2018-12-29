/* eslint no-underscore-dangle: 0 */

import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_LIST, SET_LIST } from "./actionType";

export function* getList() {
  const result = yield call(() => axios.get("http://220.230.125.73/api/posts"));
  yield put({
    type: SET_LIST,
    list: result.data._embedded.posts,
  });
}

export default [takeEvery(GET_LIST, getList)];
