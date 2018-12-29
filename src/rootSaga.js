import { all } from "redux-saga/effects";
import postSaga from "./components/post/saga";

export default function* rootSaga() {
  yield all([...postSaga]);
}
