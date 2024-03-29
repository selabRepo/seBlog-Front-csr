import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";

import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import penderReducer from "redux-pender";

const logger = createLogger({});
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, penderReducer()));
export default store;
