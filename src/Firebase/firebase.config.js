// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyBQ5DCWT4s7tcrCeHWeIvul4LWCT_5jCy0",
//   authDomain: "car-doctor-32415.firebaseapp.com",
//   projectId: "car-doctor-32415",
//   storageBucket: "car-doctor-32415.appspot.com",
//   messagingSenderId: "206660515699",
//   appId: "1:206660515699:web:49896d416d7e9de0a83706"

  apiKey:import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId:import.meta.env.VITE_appId, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app