import {
  SIGNIN_FAILED,
  SIGNOUT_FAILED,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
} from "../actions/auth/authTypes";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, authError: null };
    case SIGNIN_FAILED:
      return {...state, authError: action.err};
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNOUT_FAILED:
      return {...state, authError: action.err}      
    default:
      return state;
  }
};

export default authReducer;
