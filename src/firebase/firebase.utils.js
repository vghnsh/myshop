import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZeGBiIErC4Zfhfdwm7rBNaQX3zKvk0hY",
    authDomain: "myshop-eaed5.firebaseapp.com",
    databaseURL: "https://myshop-eaed5.firebaseio.com",
    projectId: "myshop-eaed5",
    storageBucket: "myshop-eaed5.appspot.com",
    messagingSenderId: "777724179350",
    appId: "1:777724179350:web:586318fa05c1563ffaa3b7",
    measurementId: "G-CH3D9JLMRT"
  };

  export const createUserProfileDocument = async(userAuth, additionalData )=>{
    if(!userAuth) return;
    
    const userRef =firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}= userAuth;
      const createDate= new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createDate,
          ...additionalData
        })
      }catch(error){
        console.log('Error in USer', error.message);
      }
    }
    return userRef;

  }


  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default  firebase;
