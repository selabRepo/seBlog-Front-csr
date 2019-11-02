import { combineReducers } from "redux";
import counter, { CounterState } from "./counter";
import blogList, { BlogListState } from "./blogList";

export default combineReducers<RootState>({
  counter,
  blogList
});

export type RootState = {
  counter: CounterState;
  blogList: BlogListState;
};
