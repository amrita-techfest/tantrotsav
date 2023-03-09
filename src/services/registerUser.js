import { auth, db } from "../firebase.js";
import { doc, setDoc, getDoc, arrayUnion } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function registerUser(data1) {
  setDoc(
    doc(db, "userinfo", data1.email),
    {
      email: data1.email,
      name: data1.name,
      phone: data1.phone,
      phoneWh: data1.phoneWh,
      collegeName: data1.collegeName,
      memberName: data1.memberName,
      city:data1.city,
      events: arrayUnion(...data1.selectedOptions),
      
      txnId: arrayUnion(data1.txnId),
    },
    { merge: true }
  )
    .then((doc) => {
      console.log("submit");
    })
    .catch((err) => console.log(err));
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
