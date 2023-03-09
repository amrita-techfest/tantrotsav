import React from "react";
import "./styles.css";

const PersonalInfo = ({nextStep , handleChange , values}) => {
  return (
    <div className='parent-content'>
      <div className='personalInfo-banner'>
        <h2>Please help us with some of your Personal Details</h2>
        <form>
          <div className='mb-1'>
            <label for='fullNameInput' className='form-label'>
              Full Name
            </label>
            <input type='text' className='form-control' id='fullNameInput' />
          </div>
          <div className='mb-1'>
            <label for='emailInput' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='emailInput'
              disabled
              aria-describedby='emailInfo'
              />
            <div id='emailInfo' className='form-text'>
              We'll never spam you and share your email with anyone else.
            </div>
          </div>
          <div className='mb-1'>
            <label for='phoneNumberInput' className='form-label'>
              Phone Number
            </label>
            <input
              type='tel'
              className='form-control'
              id='phoneNumberInput'
              pattern='[0-9]{3} [0-9]{3} [0-9]{4}'
              maxlength='10'
              disabled
          />
          </div>
          <div className='mb-1'>
            <label for='collegeInput' className='form-label'>
              College/University Name
            </label>
            <input type='text' className='form-control' id='collegeInput' />
          </div>
        </form>
        <div className='buttons mt-4'>
          <button 
            onClick={nextStep}
            className=' border-2 border-[#0dff00] transition duration-500 hover:bg-[#0dff00] hover:font-bold text-[16px] hover:text-black p-2 rounded-[5px] w-[130px]'>
            Go Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
