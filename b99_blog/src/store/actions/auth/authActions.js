import {
  SIGNIN_FAILED,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILED,
} from "./authTypes";

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: SIGNIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNIN_FAILED, err: err.message });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNOUT_FAILED, err: err.message });
      });
  };
};
