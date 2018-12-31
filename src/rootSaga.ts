import { all } from "redux-saga/effects";
import postSaga from "src/store/post/post.saga";

export default function* rootSaga() {
  yield all([...postSaga]);
}
