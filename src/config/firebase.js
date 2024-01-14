import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCoT1Zt3esU7-4AsKELG3_FASQqm7ff2Cg",
	authDomain: "react-firebase-mui-shops.firebaseapp.com",
	projectId: "react-firebase-mui-shops",
	storageBucket: "react-firebase-mui-shops.appspot.com",
	messagingSenderId: "856262511205",
	appId: "1:856262511205:web:08d0e69a5f467657bb548c",
	measurementId: "G-9F8FN9C1PN",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
