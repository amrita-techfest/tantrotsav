import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Dashboard from "./dashboard.js";
import "./dash.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./makePDF.js";
import { Button, Box, Tab, Tabs} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PropTypes from "prop-types";
import { getUserDetails } from "../../services/registerUser";
import Typography from "@mui/material/Typography";

import { createTheme } from '@mui/material/styles';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Profile = ({ eventDetails }) => {
  const [events, setEvents] = useState([]);
  const [userDetials, setUser] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(eventDetails);

  const getData = async (user) => {
    const data = await getUserDetails(user);
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    const user = "dhruvmillu@gmail.com";
    console.log(user);
    getData(user);
  }, []);

  return (
    <div className="p-[50px]  text-[#fff] flex flex-col align ">
      <div className=" tracking-[3px] text-[40px] font-bold px-10 mb-3">
        Profile
      </div>
      <div className="p-10 border-[#0dff00] border-2 rounded-[10px] max-w-[50%] shadow-[5px_10px_30px_-1px_#0dff00] mb-4">
        <table className="table-auto border-separate border-spacing-2">
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">
              Name
            </td>
            <td className="w-1/2">{userDetials.name}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">
              Email
            </td>
            <td className="w-1/2">{userDetials.email}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">
              Phone
            </td>
            <td className="w-1/2">{userDetials.phone}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">
              Phone (Whatsapp)
            </td>
            <td className="w-1/2">{userDetials.phoneWh}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">
              College Name
            </td>
            <td className="w-1/2">{userDetials.collegeName}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">
              City
            </td>
            <td className="w-1/2">{userDetials.city}</td>
          </tr>
        </table>
      </div>
      <div>
        <div className="flex flex-row">
          <div className=" tracking-[3px] text-[40px] font-bold px-10 mb-3">
            Event Details
          </div>
          <div>
            <Button className="p-2">
              <PDFDownloadLink
                document={<MyDocument />}
                fileName="Acknowledgement.pdf"
                className="hover:bg-[#0dff00] hover:text-[#000] bg-[#000] text-[#0dff00] font-bold p-1 rounded-[5px] transition-all text-[15px]"
              >
                {({ blob, url, loading, error }) =>
                  loading ? (
                    "Loading document..."
                  ) : (
                    <div>
                      <FileDownloadIcon /> Download Acknowledgement
                    </div>
                  )
                }
              </PDFDownloadLink>
            </Button>
          </div>
        </div>
        <div className="p-10 border-[#0dff00] border-2 rounded-[10px] max-w-[50%] shadow-[5px_10px_30px_-1px_#0dff00] mb-4">
          <Box sx={{ borderBottom: 1, borderColor: "#0dff00" }}>
            
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="primary"
              sx={{
                '& .MuiTabs-indicator': {
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#0dff00',
                },
                '& .MuiTab-textColorPrimary': {
                  color: '#0dff00',
                },
                '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': {
                  color: '#0dff00',
                },
                '& .MuiTab-root':{
                  color: '#fff',
                  fontWeight:"bold",
                  fontSize:"15px",
                }
              }}
            >
              <Tab label="Single Events"   {...a11yProps(0)} />
              <Tab label="Team Events" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <table className="table-auto border-separate border-spacing-y-5">
              <thead>
                <td className=" text-[#fff] font-bold text-[15px] m-[15px]">
                    Event Name
                </td>
                <td className="w-[5%]">
                    Fee
                </td>
              </thead>
              {userDetials.events && userDetials.events.map((event) => (
                <tr>
                  <td>
                    {event.eventName}
                    {console.log(event)}
                  </td>
                  <td >
                    {event.fee}
                  </td>
                </tr>
              ))}
            </table>
            
          </TabPanel>
          <TabPanel value={value} index={1}>
          <table className="table-auto border-separate border-spacing-y-5">
              <thead>
                <td className=" text-[#fff] font-bold text-[15px] m-[15px]">
                    Event Name
                </td>
                <td className="w-[5%]">
                    Fee
                </td>
              </thead>
              {userDetials.groupEvents && userDetials.groupEvents.map((event) => (
                <tr>
                  <td>
                    {event.eventName}
                    {console.log(event)}
                  </td>
                  <td >
                    {event.fee}
                  </td>
                </tr>
              ))}
            </table>
            {console.log(userDetials.events)}
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  eventDetails: state.eventDetails.eventDetails,
});

export default connect(mapStateToProps, null)(Profile);
