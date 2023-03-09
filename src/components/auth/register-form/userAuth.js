import React from "react";
import { registerWithGoogle } from "../../../services/registerWithGoogle";

const GoogleSignIn = () => {
  return (
    <button
      className='google-auth-button'
      onClick={() => {
        registerWithGoogle();
      }}
    >
      <span className='fa fa-google fa-lg g-logo'></span> Continue with Google
    </button>
  );
};

const UserAuth = () => {
  return (
    <div className='parent-content'>
      <div className='userAuth-banner'>
        <h2>Proceed by authenticating your email and your mobile number.</h2>
        <p>
          This helps us to reduce spam entries and connect with each participant
          better.
        </p>
        <div className='auth-buttons'>
          <GoogleSignIn />
          <p className='helper-content'>And</p>
          <div id='otpless'></div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
