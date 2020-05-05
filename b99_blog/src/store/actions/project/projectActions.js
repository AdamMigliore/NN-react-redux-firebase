import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./projectTypes";
import { PROJECTS_COLLECTION } from "../../../firebase/firestore/collections";

export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const ref = firestore.collection(PROJECTS_COLLECTION).doc();
    ref
      .set({
        ...project,
        authorFirstName: "Adam",
        authorLastName: "Di Re",
        authorID: 12345,
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
