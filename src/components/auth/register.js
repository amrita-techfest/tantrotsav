import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert,OutlinedInput,InputAdornment,IconButton,Button, FormHelperText } from '@mui/material';
import {Visibility,VisibilityOff} from '@mui/icons-material'
import './design.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { validator } from './validator';
import { db,auth } from '../../firebase';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

export default function TextFieldSizes() {
    const [events, setEvents] = React.useState('');
    const [showPassword,setShow] = React.useState(false)
    const [password,setPassword] = React.useState('')
  const handleChange = (event) => {
    var x = flags
            delete x.events
            setFlags(x)
    setEvents(event.target.value);
  };
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [city, setCity] = React.useState("")
  const [collegeName, setCollegeName] = React.useState("")
  const [name, setName] = React.useState("")
  const [gender, setGender] = React.useState('');
  const [login,setLogin] = React.useState(true)
  const handleChanges = (gen) => {
    var x = flags
            delete x.gender
            setFlags(x)
    setGender(gen.target.value);
  };
  const [flags,setFlags] = React.useState({})
  const signIn = async () => {
      signInWithEmailAndPassword(auth,email,password).then((user) => {
        console.log("signedIN")
        console.log(user.user)
        ClearForms()
      }).catch(error => {
        console.log(error.message,error.code)
        var x = {}
        if (error.code === "auth/wrong-password" || error.code === "auth/internal-error"){
            x.password = error.message
        }
        else{
          x.email = error.message
        }
        console.log(x)
        setFlags(x)
      })
  }


  const ClearForms = () => {
    setEmail("")
    setPhone("")
    setGender('')
    setName("")
    setCity("")
    setEvents('')
    setCollegeName("")
    setFlags({})
    setPassword("")
  }

  const submit = async () => {
    createUserWithEmailAndPassword(auth,email,password)
        .then(user => {
                        setDoc(doc(db,"userinfo",email),
                            {
                              email,name,gender,phone,city,collegeName,
                              events: arrayUnion(events)
                            },
                            { merge: true }
                          ).then(doc =>{ 
                                          console.log("submit")
                                          ClearForms()
                                        })
      })
  }

  const register = (evt,params) => {
    var value = validator(params)
    evt.preventDefault();
    console.log(Object.keys(value))
    if (Object.keys(value).length == 0){
      console.log("ok")
      submit()
      
    }
    else{
      
      console.log(value)
      setFlags(value)
    }
  }

  React.useEffect(() => {},[flags])


  return (
    <div className='forms h-screen'>
      {login && <div className='cardRegister'>
        <Box sx={{padding:3}}>
        <TextField 
            label="Email *"
            error={flags?.email && true}
            onChange={(evt)=> {
              var x = flags
              delete x.email
              setFlags(x)
              setEmail(evt.target.value)}}
            helperText={flags?.email}
            value = {email}
            margin="dense" fullWidth
          />
          <FormControl variant="outlined" margin='normal' fullWidth helperText={flags?.password}>
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
          <div className='flex items-center justify-evenly '>
          <Button variant="outlined"  margin="dense" onClick= {(evt)=> signIn()}>Login</Button>
          <Button variant="outlined"  margin="dense" onClick={()=>{ ClearForms()
        setLogin(!login)}}>SignUp</Button>
        </div>
        </Box>
      </div>}
      {!login && <div className='cardRegister'>
        <Box className="" sx={{padding:3}}>
          <TextField 
            label="Name *"
            error={flags?.name && true}
            onChange={(evt)=>{
              var x = flags
              delete x.name
              setFlags(x)
               setName(evt.target.value)}}
            helperText={flags?.name}
            value = {name}
            margin="dense" fullWidth
          />
          <TextField 
            label="Email *"
            error={flags?.email && true}
            onChange={(evt)=> {
              var x = flags
              delete x.email
              setFlags(x)
              setEmail(evt.target.value)}}
            helperText={flags?.email}
            value = {email}
            margin="dense" fullWidth
          />          
          <FormControl variant="outlined" margin='normal' fullWidth helperText={flags?.password}>
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
          
          <TextField 
            label="Phone *"
            error={flags?.phone && true}
            onChange={(evt)=> {
              var x = flags
              delete x.phone
              setFlags(x)
              setPhone(evt.target.value)}}
            helperText={flags?.phone}
            value = {phone}
            margin="dense" fullWidth
          />

          
          <TextField 
            label="College Name *"
            error={flags?.collegeName && true}
            onChange={(evt)=> {
              var x = flags
              delete x.collegeName
              setFlags(x)
              setCollegeName(evt.target.value)}}
            helperText={flags?.collegeName}
            value = {collegeName}
            margin="dense" fullWidth
          />
          
          <TextField 
            label="City *"
            error={flags?.city && true}
            
            helperText={flags?.city}
            onChange={(evt)=> {
              var x = flags
              delete x.city
              setFlags(x)
              setCity(evt.target.value)}}
            value = {city}
            margin="dense" fullWidth
          />
          <div className='flex items-center justify-evenly '>
          <Button variant="outlined"margin="dense" onClick= {(evt)=> register(evt,{name,email,password,collegeName,city,phone})}>Submit</Button>

          <Button variant="outlined"  margin="dense" onClick={()=>{ ClearForms()
        setLogin(!login)}}>Login</Button>
        </div>
        </Box>
      </div>}
    </div>
  );
}
