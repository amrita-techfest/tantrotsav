import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import registerUser from "../../services/registerUser";
import { createTheme, ThemeProvider } from "@mui/material";
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
import RegistrationFeePayment from "./register-form/registrationFeePayment";

const RegisterEvent = ({ eventDetails }) => {
  const [open, setOpen] = React.useState(false);
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

  const handleClose = () => {
    setOpen(false);
  };
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const prevStep = () => {
    setStep(step - 1);
  };

  const callback = params => {
    setData({ ...data, ...params });
  };

  const callbackSubmit = params => {
    var x = { ...data, ...params };
    setData({ ...data, ...params });
    registerUser(x);
  };

  const nextStep = () => {
    console.log("executed");
    setStep(step + 1);
  };

  console.log("step ", step);

  const show = () => {
    switch (step) {
      case 0:
        return <UserAuth nextStep={nextStep} />;
      case 1:
        return <PersonalInfo nextStep={nextStep} handleChange={callback} />;
      case 2:
        return <IndividualEvents nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <GroupEvents nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <RegistrationFeePayment />;
      // never forget the default case, otherwise VS code would be mad!
      default:

      // do nothing
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        {show()}
        <Button variant='outlined' onClick={handleClickOpen}>
          Open responsive dialog
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
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
};

const mapStateToProps = state => ({
  eventData: state.eventLists,
});

export default connect(mapStateToProps)(RegisterEvent);
