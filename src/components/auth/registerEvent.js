import React, { useEffect, useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import registerUser from "../../services/registerUser";
import { createTheme, ThemeProvider } from "@mui/material";
import StepGoogle from "./steps/StepGoogle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import UserAuth from "./register-form/userAuth";
//import "./register-form/styles.css";
import PersonalInfo from "./register-form/personalInfo";
import IndividualEvents from "./register-form/individualEvents";
import GroupEvents from "./register-form/groupEvents";
import { Navigate } from "react-router-dom";

const RegisterEvent = () => {
  const [open, setOpen] = React.useState(true);
  const [tc, setTC] = useState(false);
  const theme1 = useTheme();
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });
  const fullScreen = useMediaQuery(theme1.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (val) => {
    setOpen(false);
    setTC(val);
  };
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const prevStep = () => {
    setStep(step - 1);
  };

  const callback = (params) => {
    setData({ ...data, ...params });
  };

  const callbackSubmit = (params) => {
    var x = { ...data, ...params };
    setData({ ...data, ...params });
    registerUser(x);
  };

  const nextStep = () => {
    console.log("executed");
    setStep(step + 1);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const eventLists = [
    { value: "Strigrays League - Gaming Jam", regFee: 200 },
    { value: "Battle Of The Ice - Gaming Tournment", regFee: 200 },
    { value: "Zh3r0-Capture the Flag", regFee: 150 },
    { value: "Code Wars - Coding Tournment", regFee: 250 },
    { value: "Platonic", regFee: 180 },
    { value: "Bidders Coding Camp", regFee: 220 },
    { value: "BotBattleBash B3", regFee: 130 },
    { value: "ML-XLR8", regFee: 100 },
    { value: "AI Escape Room", regFee: 160 },
    { value: "Colay", regFee: 180 },
    { value: "Dare to be Different (Ideathon)", regFee: 280 },
    { value: "Forensics Investigation Challenges", regFee: 220 },
  ];

  const show = () => {
    switch (step) {
      case 0:
        return (
          // <StepGoogle nextStep={nextStep}/>
          <UserAuth />
        );
      case 1:
        return (
          // <Step1
          // nextStep = {nextStep}
          // handleChange={callback}
          // values={data}
          // />
          <PersonalInfo />
        );
      case 2:
        return (
          // <Step2
          // nextStep = {nextStep}
          // prevStep = {prevStep}
          // handleChange={callback}
          // values={data}
          // />
          <IndividualEvents />
        );
      case 3:
        return (
          // <Step3
          //     nextStep = {nextStep}
          //     prevStep = {prevStep}
          //     handleChanges={callbackSubmit}
          // />
          <GroupEvents />
        );
      case 4:
        return (
          // <Success />
          <div></div>
        );
      // never forget the default case, otherwise VS code would be mad!
      default:

      // do nothing
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        {!open && !tc && <Navigate to="/" />}
        {show()}
        <Button variant="outlined" onClick={handleClickOpen}>
          Open responsive dialog
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={() => handleClose(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Terms and Conditions for TechFest"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              1. All attendees must respect the code of conduct and behave
              appropriately. 2. Attendees must carefully select the events and
              activities they participate in, taking into consideration the
              timings as the TechFest will not be liable for any clash of events
              and refunds. 3. TechFest reserves the right to refuse entry or
              remove anyone from the event for any reason, including but not
              limited to inappropriate behavior or violation of the code of
              conduct. 4. All attendees are responsible for their own
              belongings. 5. By attending TechFest, all attendees agree to grant
              TechFest and its partners the right to use any photographs,
              videos, or other recordings taken during the event for promotional
              purposes. 6. All attendees must follow instructions from TechFest
              staff and security personnel. 7. TechFest is not liable for any
              injury, illness, or damage to personal property that may occur
              during the event. 8. All attendees are responsible for their own
              safety and well-being during the event. 9. TechFest reserves the
              right to update these terms and conditions at any time without
              notice.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => handleClose(false)}>
              Disagree
            </Button>
            <Button onClick={() => handleClose(true)} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default RegisterEvent;
