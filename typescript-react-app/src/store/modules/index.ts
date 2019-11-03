import { combineReducers } from "redux";
import blogList, { BlogListState } from "./blogList";
export default combineReducers({
  blogList
});

export type RootState = {
  blogList: BlogListState;
};
