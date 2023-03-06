import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import './design.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { validator } from './validator';
import { db } from '../../firebase';
import { doc, setDoc, arrayUnion } from 'firebase/firestore';

export default function TextFieldSizes() {
    const [events, setEvents] = React.useState('');
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
  const handleChanges = (gen) => {
    var x = flags
            delete x.gender
            setFlags(x)
    setGender(gen.target.value);
  };
  const [flags,setFlags] = React.useState({})



  const ClearForms = () => {
    setEmail("")
    setPhone("")
    setGender('')
    setName("")
    setCity("")
    setEvents('')
    setCollegeName("")
    setFlags({})
  }

  const submit = async () => {
     await setDoc(doc(db,"userinfo",email),{
      email,name,gender,phone,city,collegeName,
      events: arrayUnion(events)
     },
     { merge: true }
     )
     console.log("submit")
     ClearForms()
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
    <div className='cardRegister'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '30ch' },
      }}
      
     
    >
      <div>
        <TextField
          label="Name"
          id="outlined-size-small"
        //   defaultValue="Name"
          size="small"
          value={name}
          onChange={(evt) => {
            var x = flags
            delete x.name
            setFlags(x)
            setName(evt.target.value)
          }}
        />
        {flags?.name && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.name}</Box></div>}
        <TextField
          label="Email"
          id="outlined-size-small"
        //   defaultValue="email"
          size="small"
          value={email}
          onChange={(evt) => {
            var x = flags
            delete x.email
            setFlags(x)
            setEmail(evt.target.value)}}
        />
        
        {flags?.email && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.email}</Box></div>}
      </div>
      <div>
      <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Events</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={events}
        label="Events"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Strigrays League - Gaming Jam"}>Strigrays League - Gaming Jam</MenuItem>
        <MenuItem value={"Battle Of The Ice - Gaming Tournment"}>Battle Of The Ice - Gaming Tournment</MenuItem>
        <MenuItem value={"Zh3r0-Capture the Flag"}>Zh3r0-Capture the Flag</MenuItem>
        <MenuItem value={"Platonic"}>Platonic</MenuItem>
        <MenuItem value={"Bidders Coding Camp"}>Bidders Coding Camp</MenuItem>
        <MenuItem value={"BotBattleBash B3"}>BotBattleBash B3</MenuItem>
        <MenuItem value={"ML-XLR8"}>ML-XLR8</MenuItem>
        <MenuItem value={"AI Escape Room"}>AI Escape Room</MenuItem>
        <MenuItem value={"Colay"}>Colay</MenuItem>
        <MenuItem value={"Dare To be Different (Ideathon)"}>Dare To be Different (Ideathon)</MenuItem>
        <MenuItem value={"Forensics Investigation Challenges"}>Forensics Investigation Challenges</MenuItem>
        <MenuItem value={"120"}>Forensics Investigation Challenges</MenuItem>
      </Select>
    </FormControl>
    {flags?.events && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.events}</Box></div>}
      </div>
            <div>
      <TextField
          label="Phone Number"
          id="outlined-size-small"
          size="small"
          value={phone}
          onChange={(evt) => {
            var x = flags
            delete x.phone
            setFlags(x)
            setPhone(evt.target.value)}}
        />
        {flags?.phone && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.phone}</Box></div>}
        <TextField
        label="College Name"
        id="outlined-size-small"
        size="small"
        value={collegeName}
          onChange={(evt) => {
            var x = flags
            delete x.collegeName
            setFlags(x)
            setCollegeName(evt.target.value)}}
      />
      {flags?.collegeName && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.collegeName}</Box></div>}
      </div>
      <div>
      <TextField
          label="City"
          id="outlined-size-small"
          size="small"
          value={city}
          onChange={(evt) => {
            var x = flags
            delete x.city
            setFlags(x)
            setCity(evt.target.value)}}
        /> 
        {flags?.city && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.city}</Box></div>}
        <FormControl sx={{ m: 2, minWidth:150 }} size="small">
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={gender}
        label="Gender"
        onChange={handleChanges}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
      </Select>
    </FormControl>
    {flags?.gender && <div style ={{margin:"0px 20px"}}><Box severity="error" sx = {{fontSize:10,color:"red",margin:0}} >{flags.gender}</Box></div>}
      </div>
      <div className='flex flex-col items-center justify-center'>
      {/* <button className="border-2 border-[#ff00b3] text-black transition  duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]"> */}
      <button onClick={(evt) => register(evt,{email,phone,events,gender,name,collegeName,city})} className="border-2 border-[#ff00b3] text-black transition  duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
          </button>

      </div>
           
    </Box>
      </div>
    </div>
  );
}