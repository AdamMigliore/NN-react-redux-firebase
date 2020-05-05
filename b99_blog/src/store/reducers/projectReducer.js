import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
} from "../actions/project/projectTypes";

const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("success");
      return state;
    case CREATE_PROJECT_ERROR:
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
