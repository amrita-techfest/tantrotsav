import React from 'react'
import { Button } from '@mui/material';
// import TextField from '@mui/material';
import TextField from '@mui/material/TextField';


const Step1 = ({nextStep , handleChange , values}) => {

    const continueSection = e => {
        e.preventDefault();
        nextStep();
    }

  return (
    <div className='bg-white my-5 w-[70%] mx-auto rounded-[20px] p-3 flex flex-col'>
        <TextField
            placeholder="Email Address"
            label="Email Address"
            onChange={handleChange('email')}
            defaultValue={values.email}
            className='m-2'
        />
        <TextField 
            placeholder="Team Name"
            label='Team Name'
            onChange={handleChange('team_name')}
            className='m-2'
        />
        <TextField 
            placeholder="Team Leader Name"
            label='Team Leader Name'
            onChange={handleChange('team_leader')}
            className='m-2'
        />
        <TextField 
            placeholder="Phone number"
            label='Phone number'
            onChange={handleChange('phone_no')}
            className='m-2'
        />
        <TextField 
            placeholder="Whatsapp number"
            label='Whatsapp number'
            onChange={handleChange('whatsapp_no')}
            className='m-2'
        />
        <Button
              color="primary"
              variant="contained"
              onClick={continueSection}
              className='w-[170px] mx-auto my-3'
            >Continue</Button>
    </div>
  )
}

export default Step1