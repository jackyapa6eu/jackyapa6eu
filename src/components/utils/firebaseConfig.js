export const firebaseConfig = {
  apiKey: "AIzaSyAwRdOsofcA26IuEPV_dRMVv78cceMzkH0",
  authDomain: "jackyapa6eu.firebaseapp.com",
  databaseURL: "https://jackyapa6eu.firebaseio.com",
  projectId: "jackyapa6eu",
  storageBucket: "jackyapa6eu.appspot.com",
  messagingSenderId: "487808843024",
  appId: "1:487808843024:web:1f7ec5914f3b4495e33995"
};

/*

{
  "rules": {
    ".read": true,
    ".write": "auth != null",
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}

*/