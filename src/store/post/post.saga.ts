/* eslint no-underscore-dangle: 0 */

import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "src/store/post/post.ducks";

export function* getList() {
  const result = yield call(() => axios.get("http://220.230.125.73/api/posts"));
  yield put({
    type: ActionType.SET_LIST,
    list: result.data._embedded.posts,
  });
}

export default [takeEvery(ActionType.GET_LIST, getList)];
