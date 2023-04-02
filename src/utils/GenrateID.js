import { db } from "../firebase.js";
import { doc, getDoc } from "firebase/firestore";

async function getUser(id) {
  const docRef = doc(db, "event_registractions", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
}

async function generateID() {
  let id = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  const getData = await getUser(id);
  console.log(getData);
  if (getData) {
    await generateID();
  } else {
    return id;
  }
  return id;
}

export default generateID;
