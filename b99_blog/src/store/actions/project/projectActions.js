import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./projectTypes";
import { PROJECTS_COLLECTION } from "../../../firebase/firestore/collections";

export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const profile = getState().firebase.profile;
    const auth = getState().firebase.auth;
    const firestore = getFirestore();
    const ref = firestore.collection(PROJECTS_COLLECTION).doc();
    ref
      .set({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: auth.uid,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT });
      })
      .catch((err) => {
        dispatch({ type: CREATE_PROJECT_ERROR, err });
      });
  };
};
