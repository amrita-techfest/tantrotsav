import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './design.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function TextFieldSizes() {
  const [events, setEvents] = React.useState("");
  const handleChange = (event) => {
    var x = flags
            delete x.events
            setFlags(x)
    setEvents(event.target.value);
  };
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
    
    console.log(Object.keys(value))
    if (Object.keys(value).length == 0){
      console.log("ok")
      submit()
      
    }
    else{
      evt.preventDefault();
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
        />
        <TextField
          label="Email"
          id="outlined-size-small"
        //   defaultValue="email"
          size="small"
        />
        
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
        <MenuItem value={10}>Strigrays League - Gaming Jam</MenuItem>
        <MenuItem value={20}>Battle Of The Ice - Gaming Tournment</MenuItem>
        <MenuItem value={30}>Zh3r0-Capture the Flag</MenuItem>
        <MenuItem value={40}>Platonic</MenuItem>
        <MenuItem value={50}>Bidders Coding Camp</MenuItem>
        <MenuItem value={60}>BotBattleBash B3</MenuItem>
        <MenuItem value={80}>ML-XLR8</MenuItem>
        <MenuItem value={90}>AI Escape Room</MenuItem>
        <MenuItem value={100}>Colay</MenuItem>
        <MenuItem value={110}>Dare To be Different (Ideathon)</MenuItem>
        <MenuItem value={110}>Forensics Investigation Challenges</MenuItem>
      </Select>
    </FormControl>
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
        <MenuItem value={10}>Male</MenuItem>
        <MenuItem value={20}>Female</MenuItem>
      </Select>
    </FormControl>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <button className="border-2 border-[#ff00b3] text-black transition  duration-500 hover:bg-[#ff00b3] text-[16px] p-2 m-3 rounded-[5px] w-[130px]">
            Register
          </button>

      </div>
    </Box>
      </div>
    </div>
  );
}
