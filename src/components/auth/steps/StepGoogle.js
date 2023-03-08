import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { registerWithGoogle } from "../../../services/registerWithGoogle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SignIn from "../signin";

function StepGoogle({ nextStep, handleChange, values }) {
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
          {/* <h1 className="text-black text-center text-[24px] font-bold mt-4">
            OR
          </h1>
          <div className="mt-4">
            <SignIn />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default StepGoogle;
