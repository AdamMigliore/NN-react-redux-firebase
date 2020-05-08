const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate((doc) => {
    const project = doc.data();

    const notification = {
      content: "A new project has been created!",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userCreated = functions.auth.user().onCreate((user) => {
  admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "A new user has signed up!",
        user: `${newUser.firstName} ${newUser.lastName}`,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => {
      console.log("Notification created", doc);
    });
};
