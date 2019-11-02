import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import penderReducer from "redux-pender";
import ReduxThunk from "redux-thunk";

export default function configureStore() {
  // window 를 any 로 강제 캐스팅
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  const store = createStore(rootReducer, applyMiddleware(devTools, ReduxThunk, penderReducer()));
  return store;
}
