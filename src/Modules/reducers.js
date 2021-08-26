import { combineReducers } from "redux";
import { enableES5 } from "immer";

enableES5();

const initState = [];
const viewPost = [];
const initCategory = [];

const reducer = (state = initState, action) => {
  switch(action.type){
    case "LOAD_ADS_SUCCESS":
      if (state[0] && state[1]) {
        return [[...state[0], ...action.ads.data],[...state[1]]];
      } else if(state[0] && !state[1]){
        return [[...state[0], ...action.ads.data],[]];
      }
      else {
        return [...state, action.ads.data];
      }
    case "LOAD_ADS_FAIL":
      return [...state, action.error];

    case "LOAD_LIST_SUCCESS":
      if (state[1]) {
        return [[...state[0]],[...state[1], ...action.list.data]];
      } else {
        return [...state, action.list.data];
      }
    case "LOAD_LIST_FAIL":
      return [...state, action.error];

    case "CHANGE_ORDER":
      return [];

    default:
      return state;
  }
};

const viewReducer = (state = viewPost, action) => {
  switch(action.type){
    case "VIEW_DETAIL_SUCCESS":
        return action.detail.data;

    case "VIEW_DETAIL_FAIL" || "VIEW_DETAIL_CLEAR":
      return {};

    default:
      return state;
  }
};

const categoryReducer = (state = initCategory, action) => {
  switch(action.type){
    case "LOAD_CATEGORY_SUCCESS":
      return action.category;

    case "LOAD_CATEGORY_FAIL":
      return [];

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  viewReducer,
  categoryReducer
});

export default rootReducer;
