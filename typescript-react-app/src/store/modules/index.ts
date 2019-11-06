import { combineReducers } from "redux";
import blogList, { BlogListState } from "./blogList";
import blog, { Blog } from "./blog";
export default combineReducers({
  blogList,
  blog
});

export type RootState = {
  blogList: BlogListState;
  blog: Blog;
};
