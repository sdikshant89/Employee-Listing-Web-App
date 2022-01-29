import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/RootSaga";
import userReducer from "./user";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(userReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;