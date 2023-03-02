import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './design.css'
export default function TextFieldSizes() {
  return (
    <div className='forms h-screen'>
    <div className='cardRegister'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      
     
    >
      <div>
        <TextField
          label="Name"
          id="outlined-size-small"
        //   defaultValue="Name"
          size="small"
        />
        <TextField
          label="Email"
          id="outlined-size-small"
        //   defaultValue="email"
          size="small"
        />
        
      </div>
      <div>
      <TextField
          label="Phone Number"
          id="outlined-size-small"
          size="small"
        />
        <TextField
        label="College Name"
        id="outlined-size-small"
        size="small"
      />
      </div>
      <div>
      <TextField
          label="City"
          id="outlined-size-small"
          size="small"
        /> 
        <TextField
        label="Gender"
        id="outlined-size-small"

        size="small"
      />
      </div>
      <div>
      <button className="border-2 border-[#ff00b3] text-black transition duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
          </button>

      </div>
    </Box>
      </div>
    </div>
  );
}