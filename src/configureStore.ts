import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "src/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export default function configureStore(initialState: any) {
  const store = createStore(initialState, middleware);

  sagaMiddleware.run(rootSaga);

  return store;
}
