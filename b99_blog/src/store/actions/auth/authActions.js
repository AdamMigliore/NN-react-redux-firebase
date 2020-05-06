import { USERS_COLLECTION } from "../../../firebase/firestore/collections";

import {
  SIGNIN_FAILED,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
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

export const signUp = (userinformation) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        userinformation.email,
        userinformation.password
      )
      .then((response) => {
        firestore
          .collection(USERS_COLLECTION)
          .doc(response.user.uid)
          .set({
            firstName: userinformation.firstName,
            lastName: userinformation.lastName,
            initials:
              userinformation.firstName[0] + userinformation.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_FAILED, err });
      });
  };
};
