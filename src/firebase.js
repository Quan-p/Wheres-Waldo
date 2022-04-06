import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3iHQ6zYTF8VdXiuDTil50VnKaL8-kG44",
  authDomain: "where-swaldo-29082.firebaseapp.com",
  projectId: "where-swaldo-29082",
  storageBucket: "where-swaldo-29082.appspot.com",
  messagingSenderId: "89792480115",
  appId: "1:89792480115:web:cbf7e0632ebbdaea093b06",
  measurementId: "G-TY3DSK310Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
let charList = [];

async function getCharLocation(db) {
  const locationSnapshot = await getDocs(collection(db, 'charLocation'));
  locationSnapshot.forEach((doc) => {
    let char = {};
    char.name = doc.id;
    char.coords = doc.data();
    charList.push(char);
  })
  return charList;
}
getCharLocation(db);

export { db, charList };