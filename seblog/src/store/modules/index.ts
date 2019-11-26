import { combineReducers } from "redux";
import blogList, { BlogListState } from "./blogList";
import blog, { Blog } from "./blog";
import category, { CategoryState } from "./category";
export default combineReducers<RootState>({
  blogList,
  blog,
  category
});

export type RootState = {
  blogList: BlogListState;
  blog: Blog;
  category: CategoryState;
};
