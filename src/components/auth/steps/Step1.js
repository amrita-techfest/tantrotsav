import React, { useState,useEffect } from 'react'
// import TextField from '@mui/material';
import TextField from '@mui/material/TextField';
import {validatorSet1} from '../validator';
import {FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,Button, FormHelperText, createTheme, ThemeProvider} from '@mui/material'
import {Visibility,VisibilityOff} from '@mui/icons-material';


const Step1 = ({nextStep , handleChange , values}) => {

    const [name, setName] = useState(values.name)
    const [email,setEmail] = useState(values.email)
    
    const [phone,setPhone] = useState(values.phone)
    const [phoneWh,setPhoneWh] = useState(values.phoneWh)
    const [flags,setFlags] = useState({})

    const [showPassword,setShow] = React.useState(false)
    const [password,setPassword] = React.useState('')

    const continueSection = e => {
        e.preventDefault();
        var flag = validatorSet1({name,email,phone,phoneWh,password})
        console.log(flag,Object.keys(flag).length)
        if (Object.keys(flag).length == 0) {
            handleChange({name,email,phone,phoneWh,password})
            nextStep();
        }
        setFlags(flag)
        
    }

    

    useEffect(()=>{console.log(values)},[])

  return (
    <div className='bg-white my-5 w-[70%] mx-auto rounded-[20px] p-3 flex flex-col'>
       
        <TextField
            placeholder="Name"
            label="Name"
            className='m-2'
            defaultValue={values.name|| ""}
            value={name}
            onChange={(evt) => {
            var x = flags
            delete x.name
            setFlags(x)
            setName(evt.target.value)}}
            error={flags?.name && true}
            helperText={flags?.name}
            
        />
        <TextField
            placeholder="Email Address"
            label="Email Address"
            value={email}
            defaultValue={values.email|| ""}
            onChange={(evt) => {
            var x = flags
            delete x.email
            setFlags(x)
            setEmail(evt.target.value)}}
            className='m-2'
            error={flags?.email && true}
            helperText={flags?.email}
        />
        
        <TextField 
            placeholder="Phone number"
            label='Phone number'
            value={phone}
            defaultValue={values.phone|| ""}
          onChange={(evt) => {
            var x = flags
            delete x.phone
            setFlags(x)
            setPhone(evt.target.value)}}
            className='m-2'
            error={flags?.phone && true}
            helperText={flags?.phone}
        />
        <TextField 
            placeholder="Whatsapp number"
            label='Whatsapp number'
            value={phoneWh}
            defaultValue={values.phoneWh || ""}
          onChange={(evt) => {
            var x = flags
            delete x.phoneWh
            setFlags(x)
            setPhoneWh(evt.target.value)}}
            className='m-2'
            error={flags?.phoneWh && true}
            helperText={flags?.phoneWh}
        />
        <FormControl variant="outlined" margin='normal' className='m-2'  helperText={flags?.password}>
              <InputLabel htmlFor="outlined-adornment-password" error={flags?.password && true}>Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShow(!showPassword)}
                      onMouseDown={(evt)=> evt.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={flags?.password && true}
            
                helperText={flags?.password}
                onChange={(evt)=> {
                  var x = flags
              delete x.password
              setFlags(x)
                  setPassword(evt.target.value)}}

                label="Password"
              />
              <FormHelperText error={flags?.password && true}>{flags?.password}</FormHelperText>
          </FormControl>
        <Button
              color="primary"
              variant="contained"
              onClick={(e)=>continueSection(e)}
              className='w-[170px] mx-auto my-3'
            >Continue</Button>
    </div>
  )
}

export default Step1