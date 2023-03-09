import React, { useEffect, useState } from 'react' 
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import registerUser from '../../services/registerUser';
import { createTheme , ThemeProvider } from '@mui/material';
import StepGoogle from './steps/StepGoogle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import UserAuth from "./register-form/userAuth";
//import "./register-form/styles.css";
import PersonalInfo from "./register-form/personalInfo";
import IndividualEvents from "./register-form/individualEvents";
import GroupEvents from "./register-form/groupEvents";


const RegisterEvent = () => {
  const [open, setOpen] = React.useState(false);
  const theme1 = useTheme();
  const theme = createTheme({
    typography:{
      fontFamily: 'Poppins',
    }
  });
  const fullScreen = useMediaQuery(theme1.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [step,setStep] = useState(0)
    const [data,setData] = useState({})
    const prevStep = () => {
        setStep(step-1)
    }

    const callback = (params)=>{
        setData({...data,...params})
    }




    const callbackSubmit = (params)=>{
      var x = {...data,...params}
      setData({...data,...params})
      registerUser(x)

  }

    const nextStep = () => {
      console.log("executed")
      setStep(step+1)
    }

    useEffect(()=>{
      console.log(data)
    },[data])



    const eventLists = [
        {value: 'Strigrays League - Gaming Jam' , regFee : 200},
        {value : 'Battle Of The Ice - Gaming Tournment' , regFee : 200},
        {value : 'Zh3r0-Capture the Flag' , regFee : 150},
        {value : 'Code Wars - Coding Tournment' , regFee : 250},
        {value : 'Platonic' , regFee : 180},
        {value : 'Bidders Coding Camp' , regFee : 220},
        {value : 'BotBattleBash B3' ,regFee : 130},
        {value : 'ML-XLR8' , regFee : 100},
        {value : 'AI Escape Room' , regFee : 160},
        {value :'Colay' , regFee : 180},
        {value : 'Dare to be Different (Ideathon)' , regFee : 280},
        {value : 'Forensics Investigation Challenges' , regFee : 220},
        
      ];

      



    const show = () => {

        switch (step) {
            case 0:
              return (
                // <StepGoogle nextStep={nextStep}/>
                <UserAuth />
              )
            case 1: 
              return (
                // <Step1 
                // nextStep = {nextStep}
                // handleChange={callback}
                // values={data}
                // />
                <PersonalInfo />
              )
            case 2: 
              return (
                // <Step2 
                // nextStep = {nextStep}
                // prevStep = {prevStep}
                // handleChange={callback}
                // values={data}
                // />
                <IndividualEvents />
              )
            case 3: 
              return (
                // <Step3 
                //     nextStep = {nextStep}
                //     prevStep = {prevStep}
                //     handleChanges={callbackSubmit}
                // />
                <GroupEvents />
              )
            case 4:
              return (
                // <Success />
                <div></div>
            )
            // never forget the default case, otherwise VS code would be mad!
            default: 
                
               // do nothing
          }

        }
        return (
          <ThemeProvider theme={theme}>
            <div>
                {show()}
                <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
            </div>
          </ThemeProvider>
        );
    
}

export default RegisterEvent