import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Dashboard from "./dashboard.js"
import './dash.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
import  MyDocument  from './makePDF.js'
import { Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import getEventDetails from '../../services/getEventDetails';
import { auth,db } from '../../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import {getUserDetails} from '../../services/registerUser';

const Profile = ({eventDetails}) => {

  const [events,setEvents] = useState([])
  const [userDetials,setUser] = useState({})

  console.log(eventDetails)

  const getData = async (user) => {
    const data =  await getUserDetails(user);
    console.log(data)
    setUser(data)
  }

  useEffect(() => {
      const user = "dhruvmillu@gmail.com";
      console.log(user)
      getData(user);
  }, []);


  return (
    <div  className='p-[50px]  text-[#fff] flex flex-col align '>
      
    <div className=' tracking-[3px] text-[40px] font-bold px-10 mb-3'>Profile</div>
    <div className="p-10 border-[#0dff00] border-2 rounded-[10px] max-w-[50%] shadow-[5px_10px_30px_-1px_#0dff00] mb-4">
        <table className="table-auto border-separate border-spacing-2" >
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">Name</td>
            <td className="w-1/2">{userDetials.name}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">Email</td>
            <td className="w-1/2">{userDetials.email}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">Phone</td>
            <td className="w-1/2">{userDetials.phone}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">Phone (Whatsapp)</td>
            <td className="w-1/2">{userDetials.phoneWh}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">College Name</td>
            <td className="w-1/2">{userDetials.collegeName}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">Team Leader</td>
            <td className="w-1/2">{userDetials.teamLeader}</td>
          </tr>
          <tr>
            <td className="w-[10px] text-[#0dff00] font-bold text-[20px] m-[15px]">Team Name</td>
            <td className="w-1/2">{userDetials.teamName}</td>
          </tr>
        </table>

    </div>
    <div>
      <div className='flex flex-row'>
      <div className=' tracking-[3px] text-[40px] font-bold px-10 mb-3'>
      Event Details

    </div>
    <div>
    <Button className='p-2'>
    <PDFDownloadLink document={<MyDocument />} fileName="Acknowledgement.pdf" className='hover:bg-[#0dff00] hover:text-[#000] bg-[#000] text-[#0dff00] font-bold p-1 rounded-[5px] transition-all text-[15px]'>
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <div><FileDownloadIcon/> Download Acknowledgement</div>)}
    </PDFDownloadLink>
    </Button>
    </div>

    <div>
      {console.log(userDetials.events)}
    </div>
      </div>

    </div>
    



    
    
    </div>
  )
}


const mapStateToProps = state => ({
  eventDetails: state.eventDetails.eventDetails,
});


export default connect(mapStateToProps,null)(Profile);