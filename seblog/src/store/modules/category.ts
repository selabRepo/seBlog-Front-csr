import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { SERVER } from "src/constants";

const SET_CATGORIES = "category/SET_CETAGORIES";
export const categoryAction = {
  setCategories: createAction(
    SET_CATGORIES,
    (): Promise<any> => {
      return axios.get(`${SERVER}/api/categories`);
    }
  )
};

interface Category {
  categoryName: string;
  id: number;
  createdDate: string;
  updatedDate: string;
  groupNumber: number;
  depth: number;
  groupOrder: number;
  createdBy: string;
}
export interface CategoryState {
  category: Category[];
  isOnloadSuccess: boolean;
}

const initialState = {
  category: [
    {
      categoryName: null,
      id: 0,
      createdDate: null,
      updatedDate: null,
      groupNumber: 0,
      depth: 0,
      groupOrder: 0,
      createdBy: null
    }
  ],
  isOnloadSuccess: false
};

export default handleActions<any, CategoryState>(
  {
    ...pender({
      type: SET_CATGORIES,
      onSuccess: (state, action) => {
        const category = action.payload.data;
        return {
          ...state,
          ...category,
          isOnloadSuccess: true
        };
      },
      onFailure: (state, action) => {
        return {
          ...state,
          isOnloadSuccess: false
        };
      }
    })
  },
  initialState
);
