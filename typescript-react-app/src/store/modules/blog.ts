import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { SERVER } from "src/constants";

const ADD_BLOG_CONTENT: string = "blog/ADD_BLOG_CONTENT";
const ADD_BLOG_CATEGORY: string = "blog/ADD_BLOG_CATEGORY";
const ADD_BLOG_TITLE: string = "blog/ADD_BLOG_TITLE";
const ADD_BLOG_THUMBNAIL: string = "blog/ADD_BLOG_THUMBNAIL";
const POST_BLOG: string = "blog/POST_BLOG";
const GET_BLOG_DETAIL: string = "blog/GET_BLOG_DETAIL";
const UPDATE_BLOG_DETAIL: string = "blog/UPDATE_BLOG_DETAIL";
const INIT_STATE: string = "blog/INIT_STATE";

export type Blog = {
  categoryID: string;
  content: string;
  date: string;
  title: string;
  createdBy: string;
  isSuccess: boolean;
  isFail: boolean;
  id: string;
  thumbnail: string;
};

const initialState = {
  categoryID: null,
  content: null,
  date: null,
  title: null,
  createdBy: null,
  isSuccess: false,
  isFail: false,
  id: null,
  thumbnail: null
};

export const blogAction = {
  addBlogTitle: createAction(ADD_BLOG_TITLE, (title: string) => {
    return {
      title
    };
  }),
  addBlogContent: createAction(ADD_BLOG_CONTENT, (content: string) => {
    return {
      content
    };
  }),
  addBlogCategory: createAction(ADD_BLOG_CATEGORY, (categoryID: string) => {
    return {
      categoryID
    };
  }),
  addBlogThumbnail: createAction(ADD_BLOG_THUMBNAIL, (thumbnail: FormDataEntryValue) => {
    return {
      thumbnail
    };
  }),
  postBlog: createAction(POST_BLOG, (blog: Blog) => {
    return axios.post(`${SERVER}/api/blogs`, blog);
  }),
  getBlogDetail: createAction(GET_BLOG_DETAIL, (blogNo: string) => {
    return axios.get(`${SERVER}/api/blogs/${blogNo}`);
  }),
  updateBlogDetail: createAction(UPDATE_BLOG_DETAIL, (blog: Blog) => {
    return axios.put(`${SERVER}/api/blogs/${blog.id}`, blog);
  }),
  initState: createAction(INIT_STATE)
};

export default handleActions<any, Blog>(
  {
    [ADD_BLOG_CONTENT]: (state, action) => {
      return {
        ...state,
        content: action.payload.content
      };
    },
    [ADD_BLOG_CATEGORY]: (state, action) => {
      return {
        ...state,
        categoryID: action.payload.categoryID
      };
    },
    [ADD_BLOG_TITLE]: (state, action) => {
      return {
        ...state,
        title: action.payload.title
      };
    },
    [ADD_BLOG_THUMBNAIL]: (state, action) => {
      return {
        ...state,
        thumbnail: action.payload.thumbnail
      };
    },
    [INIT_STATE]: (state, action) => {
      return {
        ...initialState
      };
    },
    ...pender({
      type: POST_BLOG,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data,
          isSuccess: true
        };
      },
      onError: (state, action) => {
        return {
          ...state,
          isFail: true
        };
      }
    }),
    ...pender({
      type: GET_BLOG_DETAIL,
      onSuccess: (state, action) => {
        return {
          ...state,
          ...action.payload.data
        };
      }
    }),
    ...pender({
      type: UPDATE_BLOG_DETAIL,
      onSuccess: (state, action) => {
        return {
          ...state
        };
      }
    })
  },
  initialState
);
