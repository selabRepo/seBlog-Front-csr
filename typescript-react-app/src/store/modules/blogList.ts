import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";

export type BlogListState = Readonly<{
  content: object[];
  pageable: object;
  totalPages: number;
  totalElements: number;
}>;

const initialState: BlogListState = {
  content: [],
  pageable: {},
  totalPages: 0,
  totalElements: 0
};

const GET_BLOG_LIST = "blogList/GET_BLOG_LIST";
const GET_BLOG_LIST_BY_CAETGORY = "blogList/GET_BLOG_LIST_BY_CAETGORY";

export const getBlogList = createAction(GET_BLOG_LIST, () => {
  return axios.get("http://localhost:8080/api/blogs?sort=id,desc");
});

export const getBlogListByCategory = createAction(GET_BLOG_LIST_BY_CAETGORY, (params: any) => {
  return axios.get(`http://localhost:8080/api/categories/${params.categoryID}/blogs?sort=id,desc`);
});

export default handleActions<BlogListState, BlogListState>(
  {
    ...pender({
      type: GET_BLOG_LIST,
      onSuccess: (state: BlogListState, action) => {
        return {
          ...initialState,
          ...action.payload.data
        };
      }
    }),
    ...pender({
      type: GET_BLOG_LIST_BY_CAETGORY,
      onSuccess: (state, action) => {
        return {
          ...initialState,
          ...action.payload.data
        };
      }
    })
  },
  initialState
);
