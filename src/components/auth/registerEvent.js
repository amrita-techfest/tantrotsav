import React, { useState } from "react";
import { connect } from "react-redux";
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
import PersonalInfo from "./register-form/personalInfo";
import IndividualEvents from "./register-form/individualEvents";
import GroupEvents from "./register-form/groupEvents";
import RegistrationFeePayment from "./register-form/registrationFeePayment";
import { Navigate } from "react-router-dom";

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

const MobileView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      <p style={{ textAlign: "center", marginTop: "-25vh" }}>
        Please view this page on a desktop or laptop.
      </p>
      <p style={{ textAlign: "center" }}>
        The registrations can not happen on mobile devices.
      </p>
    </div>
  );
};

const RegisterEvent = () => {
  const [open, setOpen] = React.useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [tc, setTC] = useState(false);
  const theme1 = useTheme();
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  React.useEffect(() => {
    const isMobile = detectMob();
    setIsMobileView(isMobile);
  }, []);

  const fullScreen = useMediaQuery(theme1.breakpoints.down("md"));

  const handleClose = (val) => {
    setOpen(false);
    setTC(val);
  };
  const [step, setStep] = useState(0);
  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    console.log("executed");
    setStep(step + 1);
  };
  const show = () => {
    switch (step) {
      // case 0:
      //   return <UserAuth nextStep={nextStep} />;
      case 0:
        return <PersonalInfo nextStep={nextStep} />;
      case 1:
        return <IndividualEvents nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <GroupEvents nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <RegistrationFeePayment />;
      default:
        break;
    }
  };
  return (
    <>
      {/* {isMobileView ? (
        <MobileView />
      ) : ( */}
      <ThemeProvider theme={theme}>
        <div>
          {!open && !tc && <Navigate to="/" />}
          {show()}
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={() => handleClose(false)}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {
                "Terms and Conditions for TechFest (Registration starts from 20th March, 2023 - Monday, 8 pm onwards)"
              }
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <ol style={{ listStyle: "initial", fontSize: "14px" }}>
                  <li>
                    All attendees must respect the code of conduct and behave
                    appropriately.
                  </li>
                  <li>
                    Attendees must carefully select the events and activities
                    they participate in, taking into consideration the timings
                    as the TechFest will not be liable for any clash of events
                    and refunds.
                  </li>
                  <li>
                    TechFest reserves the right to refuse entry or remove anyone
                    from the event for any reason, including but not limited to
                    inappropriate behavior or violation of the code of conduct.
                  </li>

                  <li>
                    By attending TechFest, all attendees agree to grant TechFest
                    and its partners the right to use any photographs, videos,
                    or other recordings taken during the event for promotional
                    purposes.
                  </li>
                </ol>
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
      {/* )} */}
    </>
  );
};

const mapStateToProps = (state) => ({
  eventData: state.eventLists,
});

export default connect(mapStateToProps)(RegisterEvent);
