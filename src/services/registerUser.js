import { db } from "../firebase.js";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";

export default async function registerUser(registrationDetails) {
  const user = {
    name: registrationDetails.personalInfo.fullName,
    email: registrationDetails.authData.userEmail,
    phone: registrationDetails.authData.userWhatsAppNumber,
    university: registrationDetails.personalInfo.universityName,
    individualEvents: registrationDetails.individualEvents,
    teamEvents: registrationDetails.teamEvents,
    transactionId: registrationDetails.paymentData,
  };
  const collectionRef = collection(db, "registrations");
  await setDoc(collectionRef, user);
}

export async function getUserDetails(email) {
  const docRef = doc(db, "userinfo", email);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
