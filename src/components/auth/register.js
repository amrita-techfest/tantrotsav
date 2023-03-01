import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './design.css'
export default function TextFieldSizes() {
  return (
    <div className='form'>

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
        <TextField
          label="Phone Number"
          id="outlined-size-small"
        //   defaultValue="phone no"
          size="small"
        />
        
      </div>
      <div>
        
      </div>
      
    </Box>
    </div>
  );
}