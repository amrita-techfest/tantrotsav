import {auth,db} from "../firebase.js"
import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default async function registerUser (data1) {
    createUserWithEmailAndPassword(auth,data1.email,data1.password)
        .then(user => {
                        setDoc(doc(db,"userinfo",data1.email),
                            {
                              email:data1.email,
                              name:data1.name,
                              phone:data1.phone,
                              phoneWh:data1.phoneWh,
                              collegeName:data1.collegeName,
                              memberName:data1.memberName,
                              teamLeader:data1.teamLeader,
                              events:arrayUnion(...data1.selectedOptions),
                              txnId:arrayUnion(data1.txnId)
                            },
                            { merge: true }
                          ).then(doc =>{ 
                                          console.log("submit")
                                        })
      })
      .catch(err => console.log(err))
  }