import { db } from "../firebase.js";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  arrayUnion,
} from "firebase/firestore";

export default async function registerUser(registrationDetails) {
  console.log(registrationDetails);
  const docRef = doc(db, "event_registractions", registrationDetails.email);
  const res = await setDoc(
    docRef,
    {
      email: registrationDetails.email,
      fullName: registrationDetails.fullName,
      whatsappNumber: registrationDetails.whatsappNumber,
      universityName: registrationDetails.universityName,
      individualEvents: arrayUnion(...registrationDetails.individualEvents),
      teamEvents: arrayUnion(...registrationDetails.teamEvents),
      transactionID: arrayUnion(registrationDetails.transactionID),
    },
    { merge: true }
  );
  console.log(res);
  console.log("done");
}

export async function getUserDetails(email) {
  const docRef = doc(db, "event_registractions", email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
