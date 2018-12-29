import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import combinedReducer from "./combinedReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export default function configureStore(initialState) {
  const store = createStore(combinedReducer, initialState, middleware);

  sagaMiddleware.run(rootSaga);

  return store;
}
