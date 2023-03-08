import React, { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = otplessUser => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      // Handle the signup/signin process
      // ...

      console.log(`Logged in as ${waName} (${waNumber})`);
    };
  }, []);
  return <div id='otpless'></div>;
};

export default SignIn;
