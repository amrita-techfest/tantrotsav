import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default async function getEventDetails(eventKey) {
  const docRef = doc(db, "events_final", eventKey);
  // const docRef = doc(db, "events", eventKey);
  console.log("docref " ,docRef);
  const docSnap = await getDoc(docRef);
  console.log("docSnap" , docSnap);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return false;
  }
}
