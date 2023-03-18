import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserStart } from "./redux/actions";
import "./styles.css";
import Checkbox from "@mui/material/Checkbox";
import { auth } from "../../../firebase";

const RegistrationFeePayment = ({
  authData,
  registerUser,
  individualEvents,
  teamEvents,
  personalInfo,
}) => {
  const [transactionID, setTransactionID] = useState("");
  const [termsChecked, setTermsChecked] = React.useState(false);
  const [policyChecked, setPolicyChecked] = React.useState(false);

  // const [paymentProof, setPaymentProof] = useState(null);
  const navigate = useNavigate();

  const handleChange = event => {
    setPolicyChecked(!policyChecked);
  };

  const handleChange1 = event => {
    setTermsChecked(!policyChecked);
  };

  const handlePaymentRequest = () => {
    fetch("https://payment.tantrotsav.co.in/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merchant_id: "2156706",
        order_id: "123456",
        amount: "100",
        currency: "INR",
        redirect_url: "https://tantrotsav.co.in",
        cancel_url: "https://tantrotsav.co.in",
        language: "EN",
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const { accessCode, encRequest } = data;
        const form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute(
          "action",
          "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
        );
        // form.setAttribute("target", "_blank");
        const hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", "encRequest");
        hiddenField.setAttribute("id", "encRequest");
        hiddenField.setAttribute("value", encRequest);
        form.appendChild(hiddenField);
        const hiddenField2 = document.createElement("input");
        hiddenField2.setAttribute("type", "hidden");
        hiddenField2.setAttribute("name", "access_code");
        hiddenField2.setAttribute("id", "access_code");
        hiddenField2.setAttribute("value", accessCode);
        form.appendChild(hiddenField2);
        document.body.appendChild(form);
        form.submit();
      });
  };

  const user = auth.currentUser;

  useEffect(() => {
    console.log(termsChecked, policyChecked);
  }, [termsChecked, policyChecked]);

  const handleRegistration = () => {
    const userData = {
      fullName: personalInfo.fullName,
      email: user.email,
      whatsappNumber: personalInfo.userWhatsAppNumber,
      isAmrita: personalInfo.isAmrita,
      universityName: personalInfo.universityName,
      individualEvents,
      teamEvents,
      transactionID,
    };

    if (termsChecked && policyChecked) {
      registerUser(userData);
      return navigate("/");
    } else {
      alert("Please agree to the terms and conditions and privacy policy");
    }
  };

  const individualEventsTotalFees =
    individualEvents?.reduce(
      (accumulator, currentValue) => accumulator + currentValue.eventFee,
      0
    ) || 0;

  const teamEventsTotalFees =
    teamEvents?.reduce(
      (accumulator, currentValue) => accumulator + currentValue.eventFee,
      0
    ) || 0;

  const totalFees = individualEventsTotalFees + teamEventsTotalFees;

  return (
    <div className='parent-content'>
      <div className='registrationFees-banner'>
        <h2 className='mb-5'>
          Continue by paying the registration fees: Rs. {totalFees}
        </h2>
        <button
          className='paymentButton mt-5 mb-5'
          onClick={handlePaymentRequest}
        >
          Go to Payment Portal
        </button>
        <div class='mt-5 mb-3'>
          <label for='transactionIdField' className='form-label'>
            Tracking Id
          </label>
          <input
            type='text'
            class='form-control'
            id='transactionIdField'
            value={transactionID}
            onChange={e => setTransactionID(e.target.value)}
          />
        </div>
        <div className=''>
          <div className='flex justify-between items-center'>
            <Checkbox
              onChange={handleChange1}
              inputProps={{ "aria-label": "controlled" }}
            />
            <h1>
              I agree to the{" "}
              <a
                className=' text-[#0004ff]'
                href='https://docs.google.com/document/d/1YsFydt4t5BwaJlHd1p_B1JQYN3v8wWAxwAAu1mCtyx8/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                terms & conditions
              </a>
            </h1>
          </div>
          <div className='flex items-center'>
            <Checkbox
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <h1>
              I have read the{" "}
              <a
                href='https://docs.google.com/document/d/1ECe1lcXE_xdhEWRYO3YMsBayxLYA6KI2ZmR2DzbNNX8/edit?usp=sharing'
                target='_blank'
                className=' text-[#0004ff]'
                rel='noreferrer'
              >
                privacy policy
              </a>
            </h1>
          </div>
        </div>
        <div className='mb-3 mt-2'>
          <button className='registerButton' onClick={handleRegistration}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authData: state.eventLists.authData,
  personalInfo: state.eventLists.personalInfo,
  individualEvents: state.eventLists.individualEvents,
  teamEvents: state.eventLists.teamEvents,
});

const mapDispatchToProps = dispatch => ({
  registerUser: registrationDetails =>
    dispatch(registerUserStart(registrationDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationFeePayment);
