import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDFFCvWqjOshvRRy42mqxD6Qu5wXmNZhDE',
  authDomain: 'todo-app-a42e3.firebaseapp.com',
  projectId: 'todo-app-a42e3',
  storageBucket: 'todo-app-a42e3.appspot.com',
  messagingSenderId: '563614130033',
  appId: '1:563614130033:web:964824314ce7023a4c60d0',
  measurementId: 'G-X29DHFL015',
});

const db = firebaseApp.firestore();

export { db };
