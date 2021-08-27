import { createAction, createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

//action
export const getPosts = createAction("getPosts");

// reducer

export const postReducer = createReducer([], {
  // key : value
  // action : function()
  [getPosts.type]: (state, action) => {
    state.push({
      desc: action.payload.desc,
    });
  },
});

// root reducer

const rootReducer = combineReducers({
  postReducer,
});
export default rootReducer;
