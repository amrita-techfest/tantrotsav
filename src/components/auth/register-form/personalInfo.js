import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { addPersonalInfo } from "./redux/actions";
import generateID from "../../../utils/GenrateID";

const PersonalInfo = ({
  addPersonalInfo,
  authData,
  nextStep,
  personalInfo,
}) => {
  const [fullName, setFullName] = React.useState("");
  const [universityName, setUniversityName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userWhatsAppNumber, setUserWhatsAppNumber] = React.useState("");
  const [Id, setId] = useState();

  const onChange = event => {
    const { name, value } = event.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "universityName") {
      setUniversityName(value);
    }
  };

  useEffect(() => {
    const genrate = async () => {
      const id = await generateID();
      setId(id);
    };
    genrate();
  }, []);

  useEffect(() => {
    if (
      fullName !== "" &&
      universityName !== "" &&
      userEmail !== "" &&
      userWhatsAppNumber !== "" &&
      Id !== ""
    )
      // TODO: NEED TO CHECK HERE
      addPersonalInfo({
        fullName,
        universityName,
        userEmail,
        userWhatsAppNumber,
        Id,
      });
  }, [
    addPersonalInfo,
    fullName,
    universityName,
    userEmail,
    userWhatsAppNumber,
    Id,
  ]);

  const goNext = () => {
    if (
      fullName !== "" &&
      universityName !== "" &&
      userEmail !== "" &&
      userWhatsAppNumber !== ""
    ) {
      nextStep();
    }
  };

  return (
    <div className='parent-content'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          marginLeft: "10px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Please help us with some of your Personal Details
        </h2>
        <form>
          <div className='mb-1'>
            <label for='IDInput' className='form-label'>
              ID
            </label>
            <input
              type='text'
              className='form-control'
              id='IDInput'
              name='Id'
              disabled
              value={Id}
            />
          </div>
          <div className='mb-1'>
            <label for='fullNameInput' className='form-label'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='fullNameInput'
              name='fullName'
              onChange={onChange}
              value={fullName}
            />
          </div>
          <div className='mb-1'>
            <label for='emailInput' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='emailInput'
              aria-describedby='emailInfo'
              onChange={e => {
                setUserEmail(e.target.value);
              }}
              value={userEmail}
            />
            <div id='emailInfo' className='form-text'>
              We'll never spam you and share your email with anyone else.
            </div>
          </div>
          <div className='mb-1'>
            <label for='phoneNumberInput' className='form-label'>
              WhatsApp Number
            </label>
            <input
              type='tel'
              className='form-control'
              id='phoneNumberInput'
              pattern='[0-9]{3} [0-9]{3} [0-9]{4}'
              maxlength='10'
              onChange={e => {
                setUserWhatsAppNumber(e.target.value);
              }}
              value={userWhatsAppNumber}
            />
          </div>
          <div className='mb-1'>
            <label for='collegeInput' className='form-label'>
              College/University Name
            </label>
            <input
              type='text'
              className='form-control'
              id='collegeInput'
              name='universityName'
              onChange={e => {
                setUniversityName(e.target.value);
              }}
              value={universityName}
            />
          </div>
        </form>
        <div className='buttons mt-4'>
          <button
            onClick={goNext}
            className=' border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px]'
          >
            Go Next
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authData: state.eventLists.authData,
  personalInfo: state.eventLists.personalInfo,
});

const mapDispatchToProps = dispatch => ({
  addPersonalInfo: personalInfo => dispatch(addPersonalInfo(personalInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
