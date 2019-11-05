import Firebase from "firebase";
var config = {
  apiKey: "AIzaSyD74KnzXpbr3l9UXkIR4wCLIroPBrzD3uc",
  authDomain: "fir-ec65b.firebaseapp.com",
  databaseURL: "https://fir-ec65b.firebaseio.com",
  projectId: "fir-ec65b",
  storageBucket: "fir-ec65b.appspot.com",
  messagingSenderId: "267820862001",
  appId: "1:267820862001:web:56e37719891b56e1d06310"
};
let app = Firebase.initializeApp(config);

export const db = app.database();
