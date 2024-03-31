
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDM-XWTL2lX505l6JPP9IqoCWQY1y2rhqk",
  authDomain: "youtubrclonebyvinay.firebaseapp.com",
  projectId: "youtubrclonebyvinay",
  storageBucket: "youtubrclonebyvinay.appspot.com",
  messagingSenderId: "908275577900",
  appId: "1:908275577900:web:91d8cc2a7d0ab05f334d89"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBJMPTOKFgp1qdkWsPB50pLU8qNX7IPEfg",
//   authDomain: "ytclonevinay.firebaseapp.com",
//   projectId: "ytclonevinay",
//   storageBucket: "ytclonevinay.appspot.com",
//   messagingSenderId: "64454267839",
//   appId: "1:64454267839:web:7e80b1581fe4c9578d070a"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyBV0Fc3iLbT2h43XF8MymOotrWh_7XQRlM",
//   authDomain: "newcloneytbyvinay.firebaseapp.com",
//   projectId: "newcloneytbyvinay",
//   storageBucket: "newcloneytbyvinay.appspot.com",
//   messagingSenderId: "238145486362",
//   appId: "1:238145486362:web:e7c2f657d83caf38135ba3"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyDyaTZHurgk3k_PoEiKdPgTk4YRUld6Gyg",
//   authDomain: "ytclonebyme.firebaseapp.com",
//   projectId: "ytclonebyme",
//   storageBucket: "ytclonebyme.appspot.com",
//   messagingSenderId: "102056903198",
//   appId: "1:102056903198:web:dd6b6d551038e5efd1640f"
// };


firebase.initializeApp(firebaseConfig)

export default firebase.auth()
// console.log(auth)
