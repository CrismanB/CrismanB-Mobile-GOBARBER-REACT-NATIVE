import { createStore, applyMiddleware } from "redux";

export default (reducers, middlewares) => {
  const sagaMiddlewares = applyMiddleware(middlewares);
  return createStore(reducers, sagaMiddlewares);
};
