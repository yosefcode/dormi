import firebase from "firebase/app";
import "firebase/messaging";

const {
  REACT_APP_FIREBACE_APIKEY,
  REACT_APP_FIREBACE_AUTHDOMAIN,
  REACT_APP_FIREBACE_DATABASEURL,
  REACT_APP_FIREBACE_PROJECTID,
  REACT_APP_FIREBACE_STORAGEBUCKET,
  REACT_APP_FIREBACE_MESSAGINGSENERID,
  REACT_APP_FIREBACE_APPID,
  REACT_APP_FIREBACE_VAPIDKEY,
} = process.env;

var firebaseConfig = {
  apiKey: REACT_APP_FIREBACE_APIKEY,
  authDomain: REACT_APP_FIREBACE_AUTHDOMAIN,
  databaseURL: REACT_APP_FIREBACE_DATABASEURL,
  projectId: REACT_APP_FIREBACE_PROJECTID,
  storageBucket: REACT_APP_FIREBACE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBACE_MESSAGINGSENERID,
  appId: REACT_APP_FIREBACE_APPID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const messaging = firebase.messaging();
export const getToken = () => {
  return new Promise((resolve, reject) => {
    messaging
      .getToken({
        vapidKey: REACT_APP_FIREBACE_VAPIDKEY,
      })
      .then((currentToken) => {
        if (currentToken) {
          resolve(currentToken);
        } else {
          console.log("No.");
          resolve(false);
        }
      })
      .catch((err) => {
        resolve(false);

        console.log("An error occurred while retrieving token. ", err);
        // catch error while creating client token
      });
  });
};
export const onMessageListener = () => {
  return new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
};
export const onMessageListenertest = (value) => {
  debugger;
  console.log("onMessageListenertest", value);
  // return new Promise((resolve) => {
  //   messaging.onMessage((payload) => {
  //     resolve(payload);
  //   });
  // });
};
