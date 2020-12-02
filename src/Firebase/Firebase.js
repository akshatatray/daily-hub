import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyCY1k0DfliIEN4FthmovcbvlHoKMAmH-F8",
     authDomain: "react-redux-1024.firebaseapp.com",
     databaseURL: "https://react-redux-1024.firebaseio.com",
     projectId: "react-redux-1024",
     storageBucket: "react-redux-1024.appspot.com",
     messagingSenderId: "195053152578",
     appId: "1:195053152578:web:a7714caac93069638400db"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;