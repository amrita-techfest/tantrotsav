import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { registerWithGoogle } from "../../../services/registerWithGoogle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SignIn from "../signin";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../../firebase";

function StepGoogle({ nextStep, handleChange, values }) {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        nextStep();
      }
      else {
        console.log("no user");
      }
    });
  });



  return (
    <div className="h-[80%] flex justify-center items-center">
      <div className="max-w-sm block mx-auto bg-white rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <GoogleButton
            style={{ width: "300px", borderRadius: "6px", fontSize: "19px" }}
            onClick={() => {
              registerWithGoogle();
            }}
          />
          
        </div>
      </div>
    </div>
  );
}

export default StepGoogle;