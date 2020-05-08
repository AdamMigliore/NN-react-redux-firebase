import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
} from "../actions/project/projectTypes";

const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return state;
    case CREATE_PROJECT_ERROR:
      return state;
    default:
      return state;
  }
};

export default projectReducer;
