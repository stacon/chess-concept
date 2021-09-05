import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { initialReducer, initialState, initialEpics } from "./storeConfig";

const createStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];

  const composeEnhancers = composeWithDevTools({ name: "chess-concept" });

  const store = reduxCreateStore(
    combineReducers(initialReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  epicMiddleware.run(initialEpics);

  return store;
};

export { createStore };
export default createStore;
